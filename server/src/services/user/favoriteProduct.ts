import { User, IProduct } from '../../models';

export async function favoriteProduct(userId: string, product: IProduct) {
  try {
    // Update the user document using updateOne
    await User.updateOne({ _id: userId }, { $push: { favorites: product } });

    console.log('Product added to favorites successfully!');
  } catch (error) {
    console.error('Error adding product to favorites:', error);
  }
}
