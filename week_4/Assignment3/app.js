// Click to Show/Close Menu
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showMobileMenu: false};
        this.handelMobileMenuClick = this.handelMobileMenuClick.bind(this);
        this.closeMobileMenuClick = this.closeMobileMenuClick.bind(this);
    }
    componentDidMount() {
        this.match = window.matchMedia(`(max-width: 800px)`);
        this.checkWidth = (e) => {
          if (!e.matches) {
            this.setState({showMobileMenu: false});
          }
        };
    
        this.checkWidth(this.match);
        this.match.addListener(this.checkWidth);
    }
    componentWillUnmount() {
        this.match.removeListener(this.checkWidth);
      }
    handelMobileMenuClick() {
        this.setState(prevState => ({showMobileMenu: !prevState.showMobileMenu
        }));
    }
    closeMobileMenuClick() {
        this.setState(prevState => ({showMobileMenu: !prevState.showMobileMenu
        }));        
    }
    render() {
        return (
            <header>
                <div className="webNav container clearfix">
                    <h3 className="logo"><a href="#">FreshShop</a></h3>
                    <nav>
                        <ul className="menu">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                        <div className="hamburger" onClick={this.handelMobileMenuClick}>
                            <img src="img/icon_hamberger.svg" />
                        </div>
                    </nav>
                </div>
                
                <ul className="mobileMenu" style = {{display: this.state.showMobileMenu ? 'block' : 'none' }}>
                    <li>
                        <img className="closeItem" src="img/icon_close_white.svg" onClick={this.closeMobileMenuClick}/>
                    </li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Shop</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </header>
        );
    }
}

// Click to Change Text
class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {changeContent: false};
        this.handleWelcomeClick = this.handleWelcomeClick.bind(this);
    }
    handleWelcomeClick() {
        this.setState(prevState => ({changeContent: !prevState.changeContent}));
    }
    render() {
        return (
            <section className="welcome">
                <div className="welcomeFont">
                    <h1 className="headLine" onClick={this.handleWelcomeClick}>
                        {this.state.changeContent ? 'Have a good time!' : 'Welcome to FreshShop'}
                    </h1>
                    <p>See how your users experience your website in realtime or view trends to see any changes in
                        performance over time.</p>
                </div>
            </section>
        );
    }
}

// Click to Show More Content Boxes
class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showMore : false};
        this.handleShowmoreClick = this.handleShowmoreClick.bind(this);
    }
    handleShowmoreClick() {
        this.setState(prevState => ({showMore: !prevState.showMore}));
    }
    render() {
        return (
            <section>
                <h2>Fruits & Vegetables</h2>
                <div className="gallery">
                    <div className="flex-container">
                        <div className="responsiveBox">
                            <img src="img/gallery-img-01.jpg" alt="cucumber" />
                        </div>
                        <div className="responsiveBox">
                            <img src="img/gallery-img-02.jpg" alt="tomato" />
                        </div>
                    </div>
                    <div className="flex-container">
                        <div className="responsiveBox">
                            <img src="img/gallery-img-03.jpg" alt="chili" />
                        </div>
                        <div className="responsiveBox">
                            <img src="img/gallery-img-04.jpg" alt="soybean" />
                        </div>
                    </div>
                </div>
                <div className="hideGallery" style = {{display: this.state.showMore ? 'block' : 'none' }}>
                    <div className="flex-container">
                        <div className="responsiveBox">
                            <img src="img/gallery-img-05.jpg" alt="cucumber" />
                        </div>
                        <div className="responsiveBox">
                            <img src="img/gallery-img-06.jpg" alt="tomato" />
                        </div>
                    </div>
                    <div className="flex-container">
                        <div className="responsiveBox">
                            <img src="img/gallery-img-07.jpg" alt="chili" />
                        </div>
                        <div className="responsiveBox">
                            <img src="img/gallery-img-08.jpg" alt="soybean" />
                        </div>
                    </div>
                </div>
                <button className="shopButton" onClick={this.handleShowmoreClick} style = {{display: this.state.showMore ? 'none' : 'inline-block' }}>Shop more!</button>
            </section>
        );
    }
}

class Main extends React.Component {
    render() {
        return (
            <div>
                <Welcome />
                <Gallery />
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
            </div>

        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
