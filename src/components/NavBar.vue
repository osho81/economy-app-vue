<script setup lang="ts">
const brandString: string = "EcApp";
</script>

<template>
    <div className="navbar bg-base-200">

        <div className="navbar-start">
            <div className="dropdown" :style="{ zIndex: '3' }">
                <!-- {/* Hamburger meny, for smaller screen: */} -->
                <label tabIndex={0} className="btn lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <Link to="/myinfo">Something</Link>
                    </li>
                    <li>
                        <a>All items</a>
                        <ul className="p-2">
                            <li>
                                <Link to="/item1">Item 1</Link>
                            </li>
                            <li>
                                <Link to="/item2">Item 2</Link>
                            </li>
                            <li>
                                <Link to="/item3">Item 3</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/myorders">Stuff</Link>
                    </li>
                </ul>
            </div>
            <RouterLink to="/" className="font-bold text-2xl">{{ brandString }}</RouterLink>
        </div>

        <!-- {/* Top nav bar: */} -->
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <!-- {/* change a tags into react router links/navlinks */} -->
                <li>
                    <Link to="/myinfo">Something</Link>
                </li>
                <li tabIndex={0}>
                    <details className='dropdown'>
                        <summary>All items</summary>
                        <!-- {/* decrease vertical space between list items: */} -->
                        <ul className="flex flex-col space-y-[-5px]" :style="{ zIndex: '1' }">
                            <li>
                                <Link to="/item1">Item 1</Link>
                            </li>
                            <li>
                                <Link to="/item2">Item 2</Link>
                            </li>
                            <li>
                                <Link to="/item3">Item 3</Link>
                            </li>
                        </ul>
                    </details>
                </li>
                <li>
                    <Link to="/myorders">Stuff</Link>
                </li>
            </ul>
        </div>
        <div className="navbar-end">
            <a className="btn">Logout</a>
        </div>
    </div>

    <hr>
</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

/* click on brand-link goes to home, html generates an a tag:  */
a {
    font-weight: 700 !important;
    font-size: x-large;
}

.navbar-start .router-link-active {
    font-weight: 700 !important;
}

.navbar-start .router-link-exact-active {
    font-weight: 700 !important;
}

hr {
    border: 2px solid green;
    border-radius: 5px;
    /* position: absolut; */
}
</style>
  