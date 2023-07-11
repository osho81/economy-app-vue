<script setup lang="ts">
const brandString: string = "EcApp";

// Added to avoid "falltorough attributes"; see here: https://vuejs.org/guide/components/attrs.html#disabling-attribute-inheritance"
defineOptions({
  inheritAttrs: false
})
</script>

<template>
    <div className="navbar bg-base-200">

        <div className="navbar-start">
            <div className="dropdown" :style="{ zIndex: '3' }">
                <!-- {/* Hamburger meny, for smaller screen: */} -->
                <label tabIndex={0} className="btn lg:hidden">
                    <!-- Changed broken svg to this svg from fontawsome:  -->
                    <svg xmlns="http://www.w3.org/2000/svg" height="60%"
                        viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com 
                            License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 
                            113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 
                            416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                    </svg>
                </label>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <RouterLink to="/listusers" className="font-semibold text-sm active:text-sm" >List users</RouterLink>
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
            <RouterLink to="/" className="brand-router-link font-bold text-2xl">{{ brandString }}</RouterLink>
        </div>

        <!-- {/* Top nav bar: */} -->
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-base font-semibold">
                <!-- {/* change a tags into react router links/navlinks */} -->
                <li>
                    <RouterLink className="font-base" to="/listusers">List users</RouterLink>
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
/* a {
    font-weight: 700 !important;
    font-size: x-large;
} */

.navbar-start .router-link-active {
    font-weight: 700 !important;
}

.navbar-start .router-link-exact-active {
    font-weight: 700 !important;
}

/* .menu {
    font-size: smaller !important;
} */

hr {
    border: 2px solid green;
    border-radius: 5px;
    /* position: absolut; */
}

/* Visibility, hidden in small screen and visible brandname in medium screen, not working in tailwind */
@media only screen and (max-width: 700px) {
  .brand-router-link {
    visibility: hidden !important;
  }
}

@media only screen and (min-width: 1024px) {
  .brand-router-link {
    margin-left: 5% !important;
  }
}


</style>
  