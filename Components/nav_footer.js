let navbar=()=>
`<header class="header1">
<div id="navbar1">
    <div class="underNavbar1">
        <a class="un1-child-1" href="">Back To Toggl Global</a>
        <a class="un1-child-2" href="">
            Products</a>
        <a class="un1-child-3" href="">Blog</a>
        <a class="un1-child-4" href="">Our mission</a>
        <a class="un1-child-5" href="">Working at Toggl</a>
    </div>
</div>
</header>`

let navbar2=()=>
`<nav id="main_navbar" class="navbar2">
<div class="underNavbar2">
    <div class="logo"><img
            src="https://toggl.com/blog/wp-content/uploads/2020/09/toggl-track_logotype_horizontal_pink_rgb-e1599116263835.png"
            alt=""></div>
    <button>
    <span><a href="../index.html">Products</a></span>
        <div class="belowinsider">
            <div class="insider"></div>
        </div>
    </button>
    <a id="pricing" href="">Pricing</a>
    <button>
    <span><a href="../workingATToggl(jitesh)/index.html">Why Track?</a></span>
        <div class="belowinsider">
            <div class="insider"></div>
        </div>
    </button>
    <button>
        <span>Careers</span>
        <div class="belowinsider">
            <div class="insider"></div>
        </div>
    </button>
</div>
<div id="underNavbar2-rightnav" style="float:right;">
    <div class="inside-rightnav" style="display: flex;">
        <button>
            <span>Book a demo</span>
            <span style="padding-left: 20px;">|</span>
        </button>
        <button class="LoginBtn">
        <span style="padding-left: 20px;"><a href="./log&sigup/login.html">Log in</a></span>
        </button>
        <div class="tryforfreeBtn" style="padding-left: 10px;">
            <button>
                <a style="color:rgb(229, 124, 216)" href="Signup.html">Try for free</a>
            </button>
        </div>
    </div>

</div>
</nav>`





let footer =()=> `<footer class="footer1-div1">
    <div class="footer1-div1-child1">
        <div class="child1-insider">
            <div class="logo2">
                <img style="width: 100%;"
                    src="https://toggl.com/blog/wp-content/uploads/2020/09/toggl-track_logotype_horizontal_pink_rgb-e1599116263835.png"
                    alt="">
            </div>
            <div class="list-items" style=" margin-top: 25px; display: flex; cursor: pointer;">
                <div style=" width: 20%; display:grid; gap: 10px;">

                    <h5>TOGGL GLOBAL</h5>
                    <ul class="first-list" style="display: inline-block;">
                        <li>Blog</li>
                        <li>Our Mission</li>
                        <li>Working at Toggl</li>
                        <li>Legal Terms</li>
                    </ul>
                </div>
                <div style=" width: 20%; display:grid; gap: 10px;">
                    <h5>PRODUCT</h5>
                    <ul class="first-list">
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>Integrations</li>
                        <li>Case Studies</li>
                        <li>API</li>
                    </ul>
                </div>
                <div style="width: 20%; display:grid; gap: 10px;">
                    <h5>USE CASES</h5>
                    <ul class="first-list">
                        <li>Billing and Invoicing</li>
                        <li>Employee Time Tracking</li>
                        <li>Project Budgeting</li>
                        <li>Reporting</li>
                        <li>Payroll</li>
                    </ul>
                </div>
                <div style=" width: 20%; display:grid; gap: 10px;">
                    <h5>DOWNLOAD</h5>
                    <ul class="first-list">
                        <li>Mobile Apps</li>
                        <li>Desktop Apps</li>
                        <li>Browser Extensions</li>
                    </ul>
                </div>
                <div style=" width: 20%; display:grid; gap: 10px;">
                    <h5>HELP</h5>
                    <ul class="first-list">
                        <li>Support & Knowledge Base</li>
                        <li>Request A Demo</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div style=" width: 20%; display:grid; gap: 10px;">
                    <h5>RESOURCES</h5>
                    <ul class="first-list">
                        <li>Time Management Hub</li>
                        <li>Work From Home Hub</li>
                        <li>Business Resources</li>
                        <li>Productivity Resources</li>
                        <li>Timesheet Templates</li>
                        <li>Media Kit</li>
                    </ul>
                </div>

            </div>




        </div>
        <div class="child2-insider" style="display:flex; opacity: 1;">
            <p>Discover other Toggl tools:</p>
            <div class="footer2">

                <div class="footer-link">
                    <a href="">
                        <div class="logo2">
                            <img src="https://toggl.com/blog/wp-content/uploads/2020/09/toggl-track_logotype_horizontal_pink_rgb-e1599116263835.png"
                                alt="">
                        </div><span>
                            Beautifully simple work planning
                        </span>
                    </a>
                </div>

                <div class="footer-link">
                    <a href="">
                        <div class="logo2">
                            <img src="https://toggl.com/blog/wp-content/uploads/2020/09/toggl-track_logotype_horizontal_pink_rgb-e1599116263835.png"
                                alt="">
                        </div><span>
                            Beautifully simple work planning
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="footer3">
        <span>

            ©
            2022
            Toggl. All rights reserved.

        </span>
    </div>
</footer>`


export{navbar,navbar2,footer}