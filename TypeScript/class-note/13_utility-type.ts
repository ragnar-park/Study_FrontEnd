interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

// 상품 목록을 받아오기 위한 API 함수
function fetchProducts(): Promise<Product[]> {
    // ...
}
// 타입스크립트 유틸리티 타입 공식문서: https://www.typescriptlang.org/docs/handbook/utility-types.html

// interface ProductDetail {
//     id: number; 
//     name: string;
//     price: number
// }
// pick을 사용해 불필요한 타입 정의를 줄일 수 있다.

type shoppingItem = Pick<Product, 'id' | 'name' | 'price'>
function displayProductDetail(shoppingItem: Pick<Product, 'id' | 'name' | 'price'>) {

}

//Omit 특정 타입에서 지정된 속성만 제거한 타입을 정의
interface AddressBook {
    name: string;
    phone: number;
    address: string;
    company: string;
}

const phoneBook: Omit<AddressBook, 'address'> = {
    name: '재택근무',
    phone: 8201012341234,
    company: '내 방'
}

const chingtao: Omit<AddressBook, 'address'|'company'> = {
    name: '중국집',
    phone: 11112222
}
