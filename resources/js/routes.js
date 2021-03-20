
import AllProduct from './components/AllProduct.vue';

import CreateProduct from './components/CreateProduct.vue';

import EditProduct from './components/EditProduct.vue';

import AddCoin from './components/AddCoin.vue';

import Chart from './components/ChartComponent.vue';

import Post from './components/AddPost.vue';


export const routes = [
    {
        name: 'home',
        path: '/',
        component: AllProduct
    },
    {
        name: 'create',
        path: '/create',
        component: CreateProduct
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditProduct
    },
    {
        name: 'add-coin',
        path: '/add-coin',
        component: AddCoin
    },
    {
        name: 'chart',
        path: '/chart',
        component: Chart
    },
    {
        name: 'post',
        path: '/post',
        component: Post
    }
];