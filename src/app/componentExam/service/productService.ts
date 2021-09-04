import {Product} from '../entity/product.entity';

export class ProductService {

    data: any[];
    defaultImageUrl="https://images.freeimages.com/images/large-previews/7e9/ladybird-1367182.jpg";
    productArray: Product[];
    constructor() {
       this.productArray=[];
       this.data=[
       {title: "product 1",description: "product 1 desc ldkf lsdfksa;fkl kad ksdjfhksdfj", imageUrl: this.defaultImageUrl},
       {title: "product 2",description: "product 2 desc kdsjhfskdfh sdlkfjslfkshf s", imageUrl: this.defaultImageUrl},
       {title: "product 3",description: "product 3 desc dfsdfsfsdfsfsdf sdfsdsfsdfsdfsfd d fdsfsd", imageUrl: this.defaultImageUrl},
       {title: "product 4",description: "product 4 desc dskufhlsdkfjhsdlkldf dlkjfsd ldkjf dkjf" , imageUrl: this.defaultImageUrl}
    ];

    for(let i=0;i<this.data.length;i++) {
        let product=new Product(this.data[i].title,this.data[i].description,this.data[i].imageUrl);
        this.productArray.push(product);
    }


    } 

    getAllProduct() : Product[] {
        return this.productArray;
    }




}
