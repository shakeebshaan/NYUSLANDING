
import React from 'react';

export const SeenLogo: React.FC<{ className?: string }> = ({ className }) => (
    <div className={`flex flex-col items-start ${className}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="28" viewBox="0 0 113 41" fill="none" className="h-6 w-auto text-text-dark">
          <path d="M19.3578 13.5522C18.6393 13.0334 17.8211 12.5744 16.9031 12.1952C15.9851 11.816 15.0472 11.5566 14.0893 11.3969C13.1314 11.2373 12.1934 11.0577 11.2754 10.8781C10.3574 10.6785 9.55915 10.4989 8.82076 10.3193C8.10232 10.1397 7.52359 9.84032 7.08455 9.42124C6.64551 9.00215 6.42598 8.48328 6.42598 7.84468C6.42598 7.02646 6.80516 6.3679 7.5635 5.88894C8.32185 5.40999 9.29972 5.17051 10.4771 5.17051C11.8142 5.17051 12.9118 5.46986 13.7899 6.06855C14.668 6.66724 15.1669 7.44555 15.3066 8.36355H21.3335C21.0341 5.78916 19.8766 3.77355 17.861 2.31673C15.8654 0.839952 13.4507 0.101562 10.5969 0.101562C7.58346 0.101562 5.16872 0.859909 3.35268 2.39656C1.53665 3.91325 0.638603 5.84903 0.638603 8.18394C0.638603 9.54098 0.917997 10.6785 1.47678 11.6364C2.03556 12.5943 2.77395 13.3128 3.65203 13.7917C4.55007 14.2707 5.52794 14.6698 6.62555 14.9691C7.70319 15.2685 8.8008 15.508 9.87845 15.7075C10.9561 15.9071 11.9539 16.1067 12.832 16.3461C13.7301 16.5856 14.4485 16.9448 15.0073 17.4238C15.566 17.9027 15.8454 18.5214 15.8454 19.2797C15.8454 20.2177 15.4263 20.9561 14.6081 21.5149C13.7899 22.0736 12.6524 22.353 11.2155 22.353C9.7188 22.353 8.46154 21.9938 7.44376 21.2953C6.42598 20.5769 5.8672 19.6589 5.76742 18.5214H0C0.259434 21.3353 1.43686 23.5305 3.53229 25.127C5.62772 26.7235 8.30189 27.5218 11.5548 27.5218C14.4684 27.5218 16.8832 26.7435 18.8389 25.1469C20.7747 23.5704 21.7526 21.5947 21.7526 19.2199C21.7526 17.9027 21.533 16.7652 21.094 15.7874C20.6549 14.8294 20.0762 14.0911 19.3578 13.5522Z" fill="currentColor"></path><path d="M43.4035 1.77944C41.4477 0.681829 39.2924 0.123047 36.9376 0.123047C34.443 0.123047 32.168 0.721741 30.0925 1.91913C28.017 3.11652 26.3806 4.75295 25.1633 6.82842C23.9659 8.9039 23.3672 11.1989 23.3672 13.7134C23.3672 16.2878 23.9659 18.6427 25.1633 20.758C26.3607 22.8734 28.017 24.5498 30.0925 25.7472C32.168 26.9446 34.5029 27.5432 37.0374 27.5432C40.2903 27.5432 43.0443 26.7051 45.3193 25.0088C47.5943 23.3324 48.9913 21.0973 49.4702 18.3234H43.4434C43.184 19.4409 42.4655 20.3589 41.3081 21.0574C40.1506 21.7559 38.7536 22.1151 37.1372 22.1151C35.0617 22.1151 33.3454 21.5563 32.0083 20.4387C30.6713 19.3212 29.8131 17.7646 29.434 15.8088H49.6299C49.7297 15.3299 49.7895 14.4917 49.7895 13.2744C49.7895 10.7599 49.2108 8.50477 48.0533 6.46921C46.9158 4.43365 45.3592 2.87704 43.4035 1.77944ZM29.5936 10.6601C30.0326 9.04359 30.8708 7.78634 32.0882 6.90825C33.3255 6.01021 34.8222 5.57117 36.5784 5.57117C38.3744 5.57117 39.8512 6.05012 41.0686 6.96812C42.266 7.90607 43.0043 9.14338 43.2638 10.6601H29.5936Z" fill="currentColor"></path><path d="M71.6047 1.77943C69.6489 0.681829 67.4936 0.123047 65.1388 0.123047C62.6442 0.123047 60.3692 0.721741 58.2937 1.91913C56.1983 3.09656 54.5618 4.73299 53.3644 6.80846C52.1671 8.88394 51.5684 11.1789 51.5684 13.6934C51.5684 16.2678 52.1671 18.6227 53.3644 20.7381C54.5618 22.8535 56.2182 24.5298 58.2937 25.7272C60.3692 26.9246 62.7041 27.5233 65.2385 27.5233C68.4914 27.5233 71.2454 26.6851 73.5205 24.9888C75.7955 23.3125 77.1925 21.0773 77.6714 18.3034H71.6446C71.3851 19.421 70.6667 20.339 69.5092 21.0374C68.3518 21.7359 66.9548 22.0951 65.3383 22.0951C63.2629 22.0951 61.5466 21.5363 60.2095 20.4188C58.8724 19.3012 58.0143 17.7446 57.6351 15.7889H77.8311C77.9309 15.3099 77.9907 14.4718 77.9907 13.2544C77.9907 10.7399 77.412 8.48481 76.2545 6.44925C75.097 4.43365 73.5404 2.87704 71.6047 1.77943ZM57.7948 10.6601C58.2338 9.04359 59.072 7.78633 60.2893 6.90825C61.5266 6.01021 63.0234 5.57116 64.7795 5.57116C66.5756 5.57116 68.0524 6.05012 69.2698 6.96812C70.4671 7.90607 71.2055 9.14337 71.465 10.6601H57.7948Z" fill="currentColor"></path><path d="M92.559 0.101562C83.5387 0.101562 80.166 6.86681 80.166 11.8759V26.9829H86.1929V13.0733C86.1929 10.9978 86.7716 9.34141 87.949 8.10411C89.1065 6.86681 90.6631 6.2282 92.559 6.2282C94.4748 6.2282 96.0115 6.84685 97.1689 8.10411C98.3264 9.34141 98.9251 10.9978 98.9251 13.0733V27.0029H104.952V11.8759C104.952 6.80694 101.619 0.101562 92.559 0.101562Z" fill="currentColor"></path>
        </svg>
        <p className="text-xs text-text-gray tracking-wider mt-[-4px]">by Snap Finance</p>
    </div>
);

export const AppIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={className} viewBox="0 0 340 340" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="340" height="340" rx="82.2205" fill="#263CD0"></rect>
        <path d="M89.0124 224.221H120.871C131.202 250.952 161.458 265.137 188.714 254.639C216.521 244.947 231.501 213.8 220.79 185.839C215.489 172.001 202.676 157.122 191.488 145.89C185.848 140.226 180.531 135.403 176.625 131.996C176.411 131.808 176.2 131.625 175.994 131.447H209.454C226.794 140.342 240.315 155.957 247.123 175.487C247.128 175.503 247.134 175.52 247.141 175.537C262.867 217.974 241.23 266.335 198 282.118L197.981 282.125C155.751 297.902 107.604 276.214 91.8663 232.818L89.0124 224.221Z" fill="#ECEEFF"></path>
        <path d="M92.8796 165.528L92.8686 165.496C77.1179 122.007 98.7942 73.6522 142.002 57.8767C185.244 42.0883 232.388 63.7673 248.133 108.187L250.99 116.793H220.146C209.816 90.062 179.56 75.8768 152.304 86.375C124.496 96.0669 109.516 127.214 120.227 155.175C125.528 169.013 138.342 183.892 149.529 195.124C155.17 200.788 160.486 205.611 164.392 209.019C164.607 209.206 164.817 209.389 165.023 209.568H130.647C114.053 199.613 99.6341 184.904 92.8796 165.528Z" fill="#ECEEFF"></path>
    </svg>
);

export const GooglePlayIcon: React.FC = () => <img src="https://cdn.prod.website-files.com/64031c58bc443d09034abf4b/65144f926f1e360eb8835962_app-google-play.svg" alt="Get it on Google Play" className="h-12"/>;
export const AppStoreIcon: React.FC = () => <img src="https://cdn.prod.website-files.com/64031c58bc443d09034abf4b/65144f8ecf9d72aa76b2238b_app-app-store.svg" alt="Download on the App Store" className="h-12"/>;

export const FingerprintIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0012.174 21 22.25 22.25 0 0012 11c0-2.206-2.239-4-5-4s-5 1.794-5 4c0 2.206 2.239 4 5 4 1.522 0 2.862-.542 3.774-1.42z" /></svg>;
export const PaperlessIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>;
export const LockIcon: React.FC = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>;

export const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${className}`} viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

export const ArrowUpIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19V5M5 12l7-7 7 7" />
    </svg>
);

export const SwipeIcon: React.FC = () => (
    <svg width="48" height="24" viewBox="0 0 48 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-6">
        <path d="M45 21C45 11.0589 36.9411 3 27 3H21C11.0589 3 3 11.0589 3 21" stroke="#16216B" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const SecureLockIcon: React.FC = () => (
     <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 1a3 3 0 00-3 3v1H6a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-1V4a3 3 0 00-3-3zM9 4a1 1 0 012 0v1H9V4z" clipRule="evenodd" />
    </svg>
);

const PhoneScreenContent: React.FC<{ content: string }> = ({ content }) => {
    switch (content) {
        case 'dashboard':
            return <><rect x="15" y="45" width="220" height="30" fill="#E2E9FF" rx="8"/><rect x="80" y="52" width="90" height="16" fill="#A9A4FF" rx="4"/><rect x="15" y="90" width="220" height="150" fill="#F0F4FF" rx="8"/><text x="125" y="130" textAnchor="middle" fontSize="24" fontWeight="bold" fill="#1C2A6D">$151.89</text><rect x="30" y="160" width="190" height="20" fill="#E2E9FF" rx="4"/><rect x="30" y="190" width="190" height="20" fill="#E2E9FF" rx="4"/></>;
        case 'digitalCard':
            return <><rect x="30" y="80" width="190" height="120" fill="#1C2A6D" rx="10"/><text x="125" y="145" textAnchor="middle" fontSize="32" fontWeight="bold" fill="white">NYUS</text><rect x="65" y="220" width="120" height="30" fill="#1C2A6D" rx="15"/><text x="125" y="240" textAnchor="middle" fontSize="12" fontWeight="bold" fill="white">Activate card</text></>;
        case 'linkAccounts':
            return <><text x="125" y="60" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1C2A6D">Manage linked accounts</text><rect x="15" y="80" width="220" height="50" fill="#F0F4FF" rx="8"/><text x="35" y="105" fill="#5B5F71" fontSize="12">Bank of America</text><rect x="15" y="140" width="220" height="50" fill="#F0F4FF" rx="8"/><text x="35" y="165" fill="#5B5F71" fontSize="12">Capital One</text></>;
        case 'paymentModal':
            return <><rect x="15" y="45" width="220" height="30" fill="#E2E9FF" rx="8"/><rect x="15" y="90" width="220" height="150" fill="#F0F4FF" rx="8"/><rect x="15" y="260" width="220" height="120" fill="white" rx="15" stroke="#EAEAEA"/><text x="125" y="285" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1C2A6D">Pay credit card bill</text><rect x="30" y="300" width="190" height="30" fill="#F0F4FF" rx="8"/><rect x="30" y="340" width="190" height="30" fill="#F0F4FF" rx="8"/></>;
        case 'cardLock':
            return <><text x="125" y="60" textAnchor="middle" fontSize="14" fontWeight="bold" fill="#1C2A6D">Card Settings</text><rect x="15" y="80" width="220" height="50" fill="#F0F4FF" rx="8"/><text x="35" y="105" fill="#5B5F71" fontSize="12">Card is active</text><rect x="175" y="90" width="50" height="30" fill="#1C2A6D" rx="15"/><circle cx="200" cy="105" r="10" fill="white"/></>;
        case 'lockScreen':
             return <><rect x="0" y="0" width="250" height="450" fill="#ccc" /><text x="125" y="80" textAnchor="middle" fontSize="40" fontWeight="bold" fill="#1C2A6D">9:41</text><rect x="25" y="120" width="200" height="60" fill="rgba(255,255,255,0.8)" rx="15" /><text x="40" y="155" fill="#1C2A6D" fontSize="12">It's shipped!</text><rect x="25" y="190" width="200" height="60" fill="rgba(255,255,255,0.8)" rx="15" /><text x="40" y="225" fill="#1C2A6D" fontSize="12">Payment received</text></>;
        default:
            return <rect x="15" y="45" width="220" height="350" fill="#F0F4FF" rx="8"/>;
    }
}

export const PhoneMockup: React.FC<{ content?: string; children?: React.ReactNode }> = ({ content, children }) => (
    <div className="relative aspect-[9/19.5] w-full bg-[#1C1C1E] rounded-[44px] p-3 shadow-2xl">
        <div className="w-full h-full border-4 border-black rounded-[32px]">
            <div className="relative w-full h-full rounded-[28px] overflow-hidden bg-white">
                {children ?? (
                    <svg className="w-full h-full" viewBox="0 0 250 450">
                        <PhoneScreenContent content={content || 'default'} />
                    </svg>
                )}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#1C1C1E] rounded-b-xl"></div>
            </div>
        </div>
    </div>
);
