import React from "react";
import Router, { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { searchState } from "../../utils/recoil-atoms";

const SearchFormModal = () => {
    const router = useRouter();
    const [search, setSearchModal] = useRecoilState(searchState);
    const [productSearch, setProductSearch] = React.useState({ search: "" });

    const toggleSearch = () => {
        setSearchModal(!search);
        // console.log(modal)
    };

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setProductSearch((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSearch = (e) => {
        Router.push({
            pathname: "/products",
            query: { term: productSearch.search },
        });
    };

    return (
        <div
            className={`search-overlay ${
                search ? "search-overlay-active" : null
            }`}
        >
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="search-overlay-layer"></div>
                    <div className="search-overlay-layer"></div>
                    <div className="search-overlay-layer"></div>

                    <div
                        className="search-overlay-close"
                        onClick={toggleSearch}
                    >
                        <span className="search-overlay-close-line"></span>
                        <span className="search-overlay-close-line"></span>
                    </div>

                    <div className="search-overlay-form">
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSearch();
                            }}
                        >
                            <input
                                type="text"
                                className="input-search"
                                placeholder="Search here..."
                                name="search"
                                value={productSearch.search}
                                onChange={handleOnChange}
                            />
                            <button type="submit">
                                <i className="bx bx-search-alt"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchFormModal;
