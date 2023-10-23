import { atom } from "recoil";

export const collapsedState = atom({
    key: "collapsedState",
    default: true,
});

export const modalState = atom({
    key: "modalState",
    default: false,
});

export const searchState = atom({
    key: "searchState",
    default: false,
});

export const qModalState = atom({
    key: "qModalState",
    default: false,
});

export const addProductState = atom({
    key: "addProductState",
    default: false,
});

export const productsState = atom({
    key: "productsState",
    default: [],
});

export const quickViewProductState = atom({
    key: "quickViewProductState",
    default: null,
});
