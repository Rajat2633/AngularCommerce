export interface Iproduct
{
    productId: number;
    productName: string;
    imageUrl: string;
    description: string;
    storageId: number;
    category: string;
    price: number;
    createdOn: Date;
    modifiedOn: Date;
    isDeleted: boolean;
    deletedOn: Date;
}