import React from 'react';
import { Link, usePage } from '@inertiajs/react';

function Nav({ children }) {
    const { url } = usePage();
    return (
        <div id="wrapper">
            <header id="header">
                <nav>
                    <ul>
                        <li><Link href={route('posts.index')}>Home page</Link></li>
                    </ul>
                </nav>
                <nav className="links">
                    <ul>
                        <li><Link href={route('posts.show')}>My posts page</Link></li>
                        <li><Link href="/profile">Profile page</Link></li>
                        <li><Link href={route('post.create')}>Create post page</Link></li>
                    </ul>
                </nav>
                <nav className="main">
                    <ul>
                        <li className="search">
                            <a className="fa-search" href="#search">Search</a>
                            <form id="search" method="get" action={route('posts.search')}>
                                <input type="text" name="query" placeholder="Search" />
                            </form>
                        </li>
                        <li className="menu">
                            <a className="fa-bars" href="#menu">Menu</a>
                        </li>
                    </ul>
                </nav>
            </header>

            {/* Menu */}
            <section id="menu">
                <section>
                    <form className="search" method="get" action={route('posts.search')}>
                        <input type="text" name="query" placeholder="Search" />
                    </form>
                </section>

                <section>
                    <ul className="links">
                        <li>
                            <Link href={route('posts.index')}>
                                <h3>Home page</h3>
                            </Link>
                        </li>
                        <li>
                            <Link href="/profile">
                                <h3>Profile page</h3>
                            </Link>
                        </li>
                        <li>
                            <Link href={route('posts.show')}>
                                <h3>My posts page</h3>
                            </Link>
                        </li>
                        <li>
                            <Link href={route('post.create')}>
                                <h3>Create post page</h3>
                            </Link>
                        </li>
                    </ul>
                </section>

                <section>
                    <ul className="actions stacked"></ul>
                </section>
            </section>

            <main>{children}</main>
        </div>
    );
}
export default Nav;
