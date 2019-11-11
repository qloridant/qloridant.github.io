sidebar = [
  {
    title: "L'essentiel",
    collapsable: false,
    children: [
      'general',
      'schema_donnees',
      'mises_a_jour'
    ]
  }
]

module.exports = {
  theme: 'gouv-fr',
  title: 'Démo VuePress Gouv Fr',
  description: "Démonstration du thème VuePress Gouv Fr.",
  head: [
    ['meta', { name: 'theme-color', content: '#0053b3' }]
  ],
  themeConfig: {
    useMarianne: true,
    variation: 'white',
    sidebar: sidebar,
    sidebarDepth: 1,
    docsDir: ".",
    repo: 'etalab/vuepress-gouv-fr-demo',
    repoLabel: 'Dépôt Git',
    editLinks: true,
    editLinkText: 'Modifier cette page',
  }
}
