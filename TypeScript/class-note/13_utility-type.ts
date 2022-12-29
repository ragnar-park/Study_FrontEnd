interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

// 1. 상품 목록을 받아오기 위한 API 함수
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

// 2. 특정 상품의 상세 정보를 나타내기 위한 함수
type shoppingItem = Pick<Product, 'id' | 'name' | 'price'>
function displayProductDetail(shoppingItem: Pick<Product, 'id' | 'name' | 'price'>) {

}

// interface UpdateProduct {
//     id?: number;
//     name?: string;
//     price?: number;
//     brand?: string;
//     stock?: number;
// }

//  Partial<Product>는 위의 정의한 UpdateProduct 인터페이스를 사용하는 것과 동일한 효과
type UpdateProduct = Partial<Product>


// 3. 특정 상품 정보를 업데이트(갱신)하는 함수
// 필요 정보만 업데이트 
function updateProductItem(productItem: UpdateProduct) {


}

// 4. 유틸리티 타입 구현하기 - Partial
interface UserProfile {
    username: string;
    email: string;
    profilePhotoUrl: string;
}

// interface UserProfileUpdate {
//     username?: string;
//     email?: string;
//     profilePhotoUrl?: string;
// }
// #1
// type UserProfileUpdate = {
//     username?: UserProfile['username'];
//     email?: UserProfile['email'];
//     profilePhotoUrl?: UserProfile['profilePhotoUrl'];
// }

// #2 (맵드 타입)
// type UserProfileUpdate = {
//     [ p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p]
// }
// type UserProfileKeys = keyof UserProfile;

// #3 
type UserProfileUpdate = {
    [ p in keyof UserProfile]?: UserProfile[p]
}

// #4 Partial의 구현체와 동일
type  Subset<T> = {
    [ p in keyof T]?: T[p];
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
