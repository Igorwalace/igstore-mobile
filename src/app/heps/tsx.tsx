export interface Product {
    id: string,
    category: string;
    description: string;
    discount: number;
    img_main: string,
    img_2: string,
    img_3: string,
    img_4: string,
    price: number;
    quant: number;
    storeId: string;
    time: string
    title: string;
}
export interface Store{
    name: string
}
export interface Banner{
    icon_box: string,
    keyboard_banner: string,
    pc: string,
    van: string
}
