import React from 'react';
import {
    FooterSection,
    LinksSection,
    LinkList,
    LinkRow,
    StateSection
} from './style';

const links = [
    {
        title: '其他資源',
        items: [
            {text: '猿bt', url: 'https://www.apebt.com'}
        ]
    },
    {
        title: '友情鏈接',
        items: [
            {text: '学习强国', url: 'https://taery.cn'},
            {text: 'Komiic漫畫', url:'https://komiic.com'},
            {text: 'ACG喵导航', url: 'https://www.miaoaaa.com/tougao-fankui'},
            {text: 'ACG次元窗导航', url: 'https://www.acgcyc.com'},
            {text: 'ACG导航网', url: 'https://www.acgdh.cc/wangzhanshoulu'},
            {text: 'ACG御宅世界导航', url: 'https://www.acgyzsj.top/'}
        ]
    },
    {
        title: '關注我們',
        items: [
            {text: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61550319385473'},
            {text: 'Twitter', url: 'https://twitter.com/shaoerlele'},
            {text: 'SITEMAP', url: 'https://www.dmwon.com/sitemap.xml'}
        ]
    },
    {
        title: '隱私政策',
        items: [
            {text: 'DMCA', url: '#'},
            {text: 'PRIVACY', url: '#'}
        ]
    }
];

const FooterComponent = React.memo(() => {
    const targetAttr = {target: '_blank'};

    return (
        <FooterSection>
            <LinksSection>
                {links.map((section, index) => (
                    <div key={index}>
                        <h2>{section.title}</h2>
                        <LinkList>
                            {section.items.map((link, linkIndex) => (
                                <LinkRow key={linkIndex}>
                                    <a href={link.url} {...targetAttr}>
                                        {link.text}
                                    </a>
                                </LinkRow>
                            ))}
                        </LinkList>
                    </div>
                ))}
            </LinksSection>
            <StateSection>
                <p>Copyright© 2023 內容源於網絡。本站不存內容，如有問題，請閱讀DMCA，如需移除內容請聯繫shaoerlele@gmail.com</p>
            </StateSection>
        </FooterSection>
    );
});

export default FooterComponent;
