import React from 'react'

export const userContext = React.createContext();

export default function AppContext({ children }) {
    console.log("AppContext rendered");
    const [loading, setLoading] = React.useState(true);
    const [posts, setPosts] = React.useState([]);
    const [page, setPage] = React.useState(1);
    const [totalPage, setTotalPage] = React.useState(null);
    const [currentTag, setCurrentTag] = React.useState(null);
    const [currentCategory, setCurrentCategory] = React.useState(null);

    async function fetchPosts(page = 1, tag = null, category = null) {
        let url = `https://codehelp-apis.vercel.app/api/get-blogs?page=${page}`;
        setLoading(true);

        try {

            if (tag) {
                url += `&tag=${tag}`;
            }

            if (category) {
                url += `&category=${category}`;
            }


            const response = await fetch(url);

            const data = await response.json();
            console.log(data);
            setPage(data.page);
            setPosts(data.posts);
            setTotalPage(data.totalPages);
            setCurrentTag(tag);
            setCurrentCategory(category);
        }
        catch (error) {
            alert("Faild to fetch data");
            setPage(1);
            setPosts([]);
            setTotalPage(null);
            setCurrentTag(null);
            setCurrentCategory(null);
        }

        setLoading(false);
    }

    function handlePageChange(page) {
        setPage(page);
        fetchPosts(page, currentTag, currentCategory);
    }

    const value = {
        loading,
        posts,
        page,
        totalPage,
        currentTag,
        currentCategory,
        setLoading,
        setPosts,
        setPage,
        setTotalPage,
        setCurrentTag,
        setCurrentCategory,
        handlePageChange,
        fetchPosts,
    }

    return (
        <userContext.Provider value={value}>
            {children}
        </userContext.Provider>
    )
}