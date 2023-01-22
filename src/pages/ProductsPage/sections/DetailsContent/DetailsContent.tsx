import { FC, useContext } from 'react';
import { ProductContext } from 'contexts/ProductContext';
import { Product } from 'types/Product';
import { GoBack } from 'components/GoBack';
import { getMultupleRandom } from 'utils/helpers/getMultupleRandom';
import { PhoneNotFound } from 'features/PhoneNotFound/PhoneNotFound';
import { SwiperSlider } from 'features/SwiperSlider/SwiperSlider';
import { ShopButton } from 'pages/ProductsPage/subsections/ShopButton';
import { Capacity } from 'pages/ProductsPage/subsections/Capacity/Capacity';
import { Colors } from 'pages/ProductsPage/subsections/Colors/Colors';
import { Gallery } from 'pages/ProductsPage/subsections/Gallery/Gallery';
import { GeneralSpec } from 'pages/ProductsPage/subsections/GeneralSpec';
import { Paragraph } from 'pages/ProductsPage/subsections/About/About';
import { Prices } from 'pages/ProductsPage/subsections/Prices';
import { TechSpecs } from 'pages/ProductsPage/subsections/TechSpecs';
import { Title } from 'pages/ProductsPage/subsections/Title';
import './DetailsContent.scss';

type Props = {
  selectedProductGeneralInfo: Product,
  selectedCapacity: string,
  setSelectedCapacity: React.Dispatch<React.SetStateAction<string>>,
  favourites: Product[],
  setFavourites: React.Dispatch<React.SetStateAction<Product[]>>,
  cartProducts: Product[],
  setCartProducts: React.Dispatch<React.SetStateAction<Product[]>>,
};

export const DetailsContent: FC<Props> = ({
  selectedProductGeneralInfo,
  selectedCapacity,
  setSelectedCapacity,
  favourites,
  setFavourites,
  cartProducts,
  setCartProducts,
}) => {
  const {
    products,
    selectedProductDetails,
    isDetailsFailed,
  } = useContext(ProductContext);
  const productsWithoutCurrent = [...products]
    .filter(x => x.id !== selectedProductGeneralInfo.id);
  const randomSuggestedProducts = getMultupleRandom(productsWithoutCurrent, 8);

  return (
    <>
      {isDetailsFailed
        ? <PhoneNotFound />
        : (
          <div className="products-details">
            <div className="product-details__go-back">
              <GoBack />
            </div>

            {selectedProductDetails && (
              <div className="details">
                <Title selectedProductDetails={selectedProductDetails} />

                <div className="details__general grid-2-col">
                  <Gallery selectedProductDetails={selectedProductDetails} />

                  <section className="specifications">
                    <div className="options options-color">
                      <div className="options-top">
                        <div className="options__title">
                          Available colors
                        </div>
                        <div className="options__id">
                          {`ID: ${selectedProductGeneralInfo.id}`}
                        </div>
                      </div>

                      <Colors
                        selectedProductDetails={selectedProductDetails}
                        selectedProductGeneralInfo={selectedProductGeneralInfo}
                      />

                    </div>

                    <div className="options options-memory">
                      <div className="options-top">
                        <div className="options__title">
                          Select capacity
                        </div>
                      </div>

                      <Capacity
                        selectedCapacity={selectedCapacity}
                        setSelectedCapacity={setSelectedCapacity}
                        selectedProductGeneralInfo={selectedProductGeneralInfo}
                        selectedProductDetails={selectedProductDetails}
                      />
                    </div>

                    <Prices
                      selectedProductGeneralInfo={selectedProductGeneralInfo}
                    />

                    <ShopButton
                      selectedProductGeneralInfo={selectedProductGeneralInfo}
                      favourites={favourites}
                      setFavourites={setFavourites}
                      cartProducts={cartProducts}
                      setCartProducts={setCartProducts}
                    />

                    <GeneralSpec
                      selectedProductDetails={selectedProductDetails}
                    />
                  </section>
                </div>

                <section className="about grid-2-col">
                  <div className="about__content">
                    <h1 className="about__title">About</h1>

                    <Paragraph
                      selectedProductDetails={selectedProductDetails}
                    />
                  </div>

                  <TechSpecs
                    selectedProductDetails={selectedProductDetails}
                  />
                </section>
              </div>
            )}

            <SwiperSlider
              sectionTitle="You may also like"
              renderedProducts={randomSuggestedProducts}
            />
          </div>
        )}
    </>
  );
};
