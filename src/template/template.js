import React from 'react';
import './assets/vendor/fonts/fontawesome.css';
import './assets/vendor/fonts/tabler-icons.css';
import './assets/vendor/fonts/flag-icons.css';
import './assets/vendor/css/rtl/core.css';
import './assets/vendor/css/rtl/theme-default.css';
import './assets/css/demo.css';
import './assets/vendor/libs/node-waves/node-waves.css';
import './assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css';
import './assets/vendor/libs/typeahead-js/typeahead.css';
import './assets/vendor/libs/apex-charts/apex-charts.css';
import './assets/vendor/libs/swiper/swiper.css';
import './assets/vendor/libs/datatables-bs5/datatables.bootstrap5.css';
import './assets/vendor/libs/datatables-responsive-bs5/responsive.bootstrap5.css';
import './assets/vendor/libs/datatables-checkboxes-jquery/datatables.checkboxes.css';

class Template extends React.Component {
  render() {
    return (
      <html
        lang="en"
        className="light-style layout-menu-fixed layout-compact"
        dir="ltr"
        data-theme="theme-default"
        data-assets-path="./assets/"
        data-template="horizontal-menu-template"
      >
        <head>
          <meta charset="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0"
          />

          <title>DYFZN Camera</title>

          <meta name="description" content="" />

          {/* Favicon */}
          <link rel="icon" type="image/x-icon" href="./assets/img/D.png" />

          {/* Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&amp;display=swap"
            rel="stylesheet"
          />

          {/* Icons */}
          <link rel="stylesheet" href="./assets/vendor/fonts/fontawesome.css" />
          <link rel="stylesheet" href="./assets/vendor/fonts/tabler-icons.css" />
          <link rel="stylesheet" href="./assets/vendor/fonts/flag-icons.css" />

          {/* Core CSS */}
          <link rel="stylesheet" href="./assets/vendor/css/rtl/core.css" className="template-customizer-core-css" />
          <link
            rel="stylesheet"
            href="./assets/vendor/css/rtl/theme-default.css"
            className="template-customizer-theme-css"
          />
          <link rel="stylesheet" href="./assets/css/demo.css" />

          {/* Vendors CSS */}
          <link rel="stylesheet" href="./assets/vendor/libs/node-waves/node-waves.css" />
          <link rel="stylesheet" href="./assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
          <link rel="stylesheet" href="./assets/vendor/libs/typeahead-js/typeahead.css" />
          <link rel="stylesheet" href="./assets/vendor/libs/apex-charts/apex-charts.css" />
          <link rel="stylesheet" href="./assets/vendor/libs/swiper/swiper.css" />
          <link rel="stylesheet" href="./assets/vendor/libs/datatables-bs5/datatables.bootstrap5.css" />
          <link
            rel="stylesheet"
            href="./assets/vendor/libs/datatables-responsive-bs5/responsive.bootstrap5.css"
          />
          <link
            rel="stylesheet"
            href="./assets/vendor/libs/datatables-checkboxes-jquery/datatables.checkboxes.css"
          />

          {/* Page CSS */}
          <link rel="stylesheet" href="./assets/vendor/css/pages/cards-advance.css" />
          <link rel="stylesheet" href="./assets/vendor/css/pages/ui-carousel.css" />
        </head>
        <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
            <div className="layout-container">
            <nav className="layout-navbar navbar navbar-expand-xl align-items-center bg-navbar-theme" id="layout-navbar">
                <div className="container-xxl">
                <div className="navbar-brand app-brand demo d-none d-xl-flex py-0 me-4">
                    <a href="index.html" className="app-brand-link gap-2">
                    <span className="app-brand-logo demo"></span>
                    <span className="app-brand-text demo menu-text fw-bold">KONTOL</span>
                    </a>

                    <a href="javascript:void(0);" className="layout-menu-toggle menu-link text-large ms-auto d-xl-none">
                    <i className="ti ti-x ti-sm align-middle"></i>
                    </a>
                </div>

                <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
                    <a className="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
                    <i className="ti ti-menu-2 ti-sm"></i>
                    </a>
                </div>
                
                <div className="navbar-nav-right d-flex align-items-center mx-4" id="navbar-collapse">
                    <div className="navbar-search-wrapper">
                    <a className="nav-link search-toggler" href="javascript:void(0);">
                        <i className="ti ti-search ti-md"></i>
                    </a>
                    </div>
                    <div className="navbar-search-wrapper search-input-wrapper container-xxl d-none align-center">
                    <input
                        type="text"
                        className="form-control search-input border-0 me-xl-4"
                        placeholder="Search..."
                        aria-label="Search..."
                    />
                    </div>
                </div>
                
                <ul className="navbar-nav flex-row align-items-center ms-auto">
                    <li className="nav-item dropdown-style-switcher dropdown me-2 me-xl-0">
                    <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                        <i className="ti ti-md"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end dropdown-styles">
                        <li>
                        <a className="dropdown-item" href="javascript:void(0);" data-theme="light">
                            <span className="align-middle"><i className="ti ti-sun me-2"></i>Light</span>
                        </a>
                        </li>
                        <li>
                        <a className="dropdown-item" href="javascript:void(0);" data-theme="dark">
                            <span className="align-middle"><i className="ti ti-moon me-2"></i>Dark</span>
                        </a>
                        </li>
                        <li>
                        <a className="dropdown-item" href="javascript:void(0);" data-theme="system">
                            <span className="align-middle"><i className="ti ti-device-desktop me-2"></i>System</span>
                        </a>
                        </li>
                    </ul>
                    </li>
                    
                    <li className="nav-item navbar-dropdown dropdown-user dropdown">
                    <a className="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                        <div className="avatar avatar-online">
                        <img src="./assets/img/avatars/1.png" alt className="h-auto rounded-circle" />
                        </div>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                        <a className="dropdown-item" href="pages-account-settings-account.html">
                            <div className="d-flex">
                            <div className="flex-shrink-0 me-3">
                                <div className="avatar avatar-online">
                                <img src="./assets/img/avatars/1.png" alt className="h-auto rounded-circle" />
                                </div>
                            </div>
                            <div className="flex-grow-1">
                                <span className="fw-medium d-block">Deran Deriyana Fauzzan</span>
                                <small className="text-muted">Newbie</small>
                            </div>
                            </div>
                        </a>
                        </li>
                        <li>
                        <div className="dropdown-divider"></div>
                        </li>
                        <li>
                        <a className="dropdown-item" href="pages-profile-user.html">
                            <i className="ti ti-user-check me-2 ti-sm"></i>
                            <span className="align-middle">My Profile</span>
                        </a>
                        </li>
                        <li>
                        <a className="dropdown-item" href="pages-account-settings-account.html">
                            <i className="ti ti-settings me-2 ti-sm"></i>
                            <span className="align-middle">Settings</span>
                        </a>
                        </li>
                        <li>
                        <a className="dropdown-item" href="pages-account-settings-billing.html">
                            <span className="d-flex align-items-center align-middle">
                            <i className="flex-shrink-0 ti ti-credit-card me-2 ti-sm"></i>
                            <span className="flex-grow-1 align-middle">Billing</span>
                            <span className="flex-shrink-0 badge badge-center rounded-pill bg-label-danger w-px-20 h-px-20">2</span>
                            </span>
                        </a>
                        </li>
                        <li>
                        <div className="dropdown-divider"></div>
                        </li>
                        <li>
                        <a className="dropdown-item" href="auth-login-cover.html" target="_blank">
                            <i className="ti ti-logout me-2 ti-sm"></i>
                            <span className="align-middle">Log Out</span>
                        </a>
                        </li>
                    </ul>
                    </li>
                </ul>
                </div>
            </nav>
            </div>
        </div>
        <body>
          {/* Your HTML content goes here */}
        </body>
        <script src="./assets/vendor/libs/jquery/jquery.js"></script>
        <script src="./assets/vendor/libs/popper/popper.js"></script>
        <script src="./assets/vendor/js/bootstrap.js"></script>
        <script src="./assets/vendor/libs/node-waves/node-waves.js"></script>
        <script src="./assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></script>
        <script src="./assets/vendor/libs/hammer/hammer.js"></script>
        <script src="./assets/vendor/libs/i18n/i18n.js"></script>
        <script src="./assets/vendor/libs/typeahead-js/typeahead.js"></script>
        <script src="./assets/vendor/js/menu.js"></script>

        {/* Vendors JS */}
        <script src="./assets/vendor/libs/apex-charts/apexcharts.js"></script>
        <script src="./assets/vendor/libs/swiper/swiper.js"></script>
        <script src="./assets/vendor/libs/datatables-bs5/datatables-bootstrap5.js"></script>

        {/* Main JS */}
        <script src="./assets/js/main.js"></script>

        {/* Page JS */}
        <script src="./assets/js/dashboards-analytics.js"></script>
        <script src="./assets/js/ui-carousel.js"></script>
      </html>
    );
  }
}

export default Template;
