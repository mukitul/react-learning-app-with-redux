import FooterComponent from "../common/FooterComponent";
import HeaderComponent from "../common/HeaderComponent";

export function MainLayout({ children }: any) {
    return (<>
        <header>
            <HeaderComponent />
        </header>
        <div className="min-h-screen p-2">
            {children}
        </div>
        <footer>
            <FooterComponent />
        </footer>
    </>)
}

export default MainLayout;