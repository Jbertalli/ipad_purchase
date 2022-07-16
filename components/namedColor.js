import React from 'react';
import { useRouter } from 'next/router';

export default function NamedColor() {
    const router = useRouter();

    return (
        <>
            { (router.pathname === '/colorSelection/grayipad') ? (<>
                Space Gray
            </>
            ):(
            <>
                
                { (router.pathname === '/colorSelection/pinkipad') ? (<>
                    Pink
                </>
                ):(
                <>
                    { (router.pathname === '/colorSelection/purpleipad') ? (<>
                        Purple
                    </>
                    ):(
                    <>
                        { (router.pathname === '/colorSelection/blueipad') ? (<>
                            Blue
                        </>
                        ):(
                        <>
                            { (router.pathname === '/colorSelection/starlightipad') ? (<>
                                Starlight
                            </>
                            ):(
                            <>
                                &nbsp;
                            </>
                            )}
                        </>
                        )}
                    </>
                    )}
                </>
                )}
            </>
            )}
        </>
    );
}
