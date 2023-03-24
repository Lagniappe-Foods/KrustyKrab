import { useState } from 'react';
import { ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import ProductRow from '../../../components/ProductRow/ProductRow';
import { Product } from '../../../store/slices/api/templateApi.generated';
import {
  Root,
  TopBar,
  Products,
  Filter,
  SearchIcon,
  ContactInfo,
  EmailText,
  EmailLink,
  ButtonGroup,
  SectionButton,
  Headers,
  ProductList,
} from './ProductPage.styled';
import {
  ItemId,
  Description,
  CasePack,
  CaseWeight,
  Quantity,
} from '../CurrentOrderPage/CurrentOrder/CurrentOrder.styled';
import { useAppSelector } from '../../../store/hooks';
import {
  selectAllProducts,
  selectFavorites,
  Favorite,
} from '../../../store/slices/productSlice';
import MagnifyingGlass from '../../../assets/search-icon.svg';

const ProductsPage = () => {
  // Grab all products from our store
  const allProducts = useAppSelector<Product[]>(selectAllProducts);
  const favorites = useAppSelector<Favorite[]>(selectFavorites);

  // state for selected category and current query
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [query, setQuery] = useState<string>('');

  // Helper function to determine if product is a favorite
  const isFavorite = (_id: string) => {
    return favorites?.some((fav) => fav._id == _id);
  };

  // Apply search query and category filters
  const selectedCategoryProducts = allProducts.filter((product) => {
    if (
      selectedCategory === 'ALL' ||
      product.category === selectedCategory ||
      (selectedCategory === 'FAVORITES' && isFavorite(product._id))
    )
      return true;
  });

  const filteredProducts = selectedCategoryProducts.filter((product) => {
    return product.description
      .toLocaleLowerCase()
      .includes(query.toLocaleLowerCase());
  });

  // Apply favorites sort
  filteredProducts?.sort((a, b) => {
    if (isFavorite(a._id) && !isFavorite(b._id)) return -1;
    else if (!isFavorite(a._id) && isFavorite(b._id)) return 1;
    else {
      return 0;
    }
  });

  return (
    <Root>
      <TopBar>
        <SearchIcon src={MagnifyingGlass} />
        <Filter
          type='search'
          placeholder='Filter by name/description of product'
          onChange={(e) => setQuery(e.target.value)}
        />

        <ContactInfo>
          <EmailText>Email Sales Rep: </EmailText>
          <EmailLink href='mailto: dylan@lagniappefoods.com'>
            dylan@lagniappefoods.com
          </EmailLink>
        </ContactInfo>
      </TopBar>

      <ButtonGroup
        type='radio'
        name='categoryFilters'
        defaultValue={'ALL'}
        onChange={(val: string) => setSelectedCategory(val)}
      >
        <SectionButton id='all' value='ALL'>
          All
        </SectionButton>
        <SectionButton id='faves' value='FAVORITES'>
          Favorites
        </SectionButton>
        <SectionButton id='cakes' value='SEAFOOD_CAKES'>
          Seafood Cakes
        </SectionButton>
        <SectionButton id='burgers' value='SEAFOOD_BURGERS'>
          Seafood Burgers
        </SectionButton>
        <SectionButton id='sausage' value='SEAFOOD_SAUSAGE'>
          Seafood Sausage
        </SectionButton>
        <SectionButton id='fillets' value='PREPARED_FILLETS'>
          Prepared Fillets
        </SectionButton>
        <SectionButton id='salads' value='SEAFOOD_SALADS'>
          Seafood Salads
        </SectionButton>
        <SectionButton id='stuffings' value='SEAFOOD_STUFFINGS'>
          Seafood Stuffings
        </SectionButton>
      </ButtonGroup>

      <Products className='mt-5'>
        <Headers>
          <ItemId $header>Item ID</ItemId>
          <Description $header $position={25}>
            Description
          </Description>
          <CasePack $header $position={48}>
            Case Pack
          </CasePack>
          <CaseWeight $header $position={60}>
            Case Weight
          </CaseWeight>
          <Quantity $header $position={72}>
            Quantity
          </Quantity>
        </Headers>

        <ProductList>
          {filteredProducts?.map((product) => (
            <ProductRow key={product._id} product={product} />
          ))}
        </ProductList>
      </Products>
    </Root>
  );
};

export default ProductsPage;
