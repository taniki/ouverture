module.exports = {
    title: 'Publications',
    themeConfig: {
        subdomain: 'publications'
    },
    plugins: ['demo-code'],
    markdown: {
        anchor: { permalink: false }
    },
    head: [
        [ "link", {
            rel: "stylesheet",
            href: "https://unpkg.com/template.data.gouv.fr@1.2.2/dist/main.min.css"
        } ]
    ],
    dest: 'public'
}
