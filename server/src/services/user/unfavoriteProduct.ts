import { User, IProductDocument } from '../../models';

export async function unfavoriteProduct(
  userId: string,
  product: IProductDocument,
) {
  try {
    // Update the user document using updateOne
    await User.updateOne(
      { _id: userId },
      { $pull: { favorites: { _id: product._id } } },
    );

    console.log('Product removed from favorites successfully!');
  } catch (error) {
    console.error('Error removing product from favorites:', error);
  }
}
