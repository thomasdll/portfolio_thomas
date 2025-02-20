import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                {children}
                <Analytics /> {/* Composant ajouté ici */}
            </body>
        </html>
    );
}