import HeaderComponent from '../HeaderComponent';
import FooterComponent from '../FooterComponent';

// @ts-ignore
function MainLayout({children}) {
    return (
        <>
            <HeaderComponent/>
            <div className="flex flex-col grow items-center pt-0">
                <div className={`container grow h-full my-6`}>
                    <>{children}</>
                </div>
                <div></div>
            </div>
            <FooterComponent/>
        </>
    );
}

export default MainLayout;