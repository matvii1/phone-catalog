import { FC } from 'react';
import { ProductsPage } from 'pages/ProductsPage/ProductsPage';

type Props = {
  pageType: string,
  title: string,
};

export const TabletsPage: FC<Props> = ({
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
