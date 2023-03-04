const { SitemapStream, streamToPromise } = require( 'sitemap' );
const { Readable } = require( 'stream' );

export default async (req, res) => {
    // Array containing links
    const links = [
        { url: '/pages/newCart', changefreq: 'daily', priority: 0.1  }, 
        { url: '/pages/ipadair', changefreq: 'daily', priority: 0.1  },
        { url: '/pages/colorSelection/ipadhome', changefreq: 'daily', priority: 0.1  },
        { url: '/pages/colorSelection/grayipad', changefreq: 'daily', priority: 0.1  },
        { url: '/pages/colorSelection/pinkipad', changefreq: 'daily', priority: 0.1  },
        { url: '/pages/colorSelection/purpleipad', changefreq: 'daily', priority: 0.1  },
        { url: '/pages/colorSelection/blueipad', changefreq: 'daily', priority: 0.1  },
        { url: '/pages/colorSelection/starlightipad', changefreq: 'daily', priority: 0.1  },
        { url: '/pages/account', changefreq: 'daily', priority: 0.1  }
    ];

    // Create a stream to write to
    const stream = new SitemapStream( { hostname: `https://${req.headers.host}` } );

    res.writeHead(200, {
        "Content-Type": "application/xml",
    });

    const xmlString = await streamToPromise(
        Readable.from(links).pipe(stream)
    ).then((data) => data.toString());

    res.end(xmlString)
}
