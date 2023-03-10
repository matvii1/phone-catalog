import { FC } from 'react';
import { ProductsPage } from 'pages/ProductsPage/ProductsPage';

type Props = {
  pageType: string,
  title: string,
};

export const PhonesPage: FC<Props> = ({
  title,
  pageType,
}) => {
  return (
    <ProductsPage
      title={title}
      pageType={pageType}
    />
  );
};
