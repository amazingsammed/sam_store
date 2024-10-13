import React from 'react';

const menus = [
    {
        'title': "Stores",
        'Children': [
            {
                'title': "All Business",
                'url': "/business"
            },
            {
                'title': "All Stores",
                'url': "/stores"
            },
        ]
    },
    {
        'title': "Account",
        'Children': [
            {
                'title': "Preferences",
                'url': "/preferences"
            },
        ]
    },
];

function Storesidebar(props) {
    return (
        <div className="h-full bg-dash-sidebar hide-scrollbar w-64 overflow-auto border-r border-default">
            <div className="flex h-12 max-h-12 items-center border-b px-6 border-default">
                Home
            </div>
            <div className="h-full bg-dash-sidebar hide-scrollbar   overflow-auto border-r border-default">
                {menus.map((item, index) => (
                    <div className="border-b py-5 px-6 border-default" key={index}>
                        <div className="text-sm text-foreground-lighter w-ful">
                            {item.title}
                        </div>
                        {item.Children.map((item, index) => (
                            <div key={index}
                                 className="group flex max-w-full cursor-pointer items-center space-x-2 border-default py-1 font-normal outline-none ring-foreground focus-visible:z-10 focus-visible:ring-1 group-hover:border-foreground-muted">
                                {item.title}
                            </div>
                        ))}
                    </div>
                ))}
            </div>

        </div>
    );
}

export default Storesidebar;