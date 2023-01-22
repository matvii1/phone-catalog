import { FC } from 'react';
import { ProductsPage } from 'src/pages/ProductsPage/ProductsPage';

type Props = {
  pageType: string,
  title: string,
};

export const AccessoriesPage: FC<Props> = ({
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
