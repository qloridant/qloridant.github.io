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
  title: 'Registre Navires Pro',
  description: "Documentation liée au registre des navire professionnels français par la Direction des Affaires Maritimes",
  head: [
    ['meta', { name: 'theme-color', content: '#0053b3' }]
  ],
  themeConfig: {
    useMarianne: true,
    variation: 'white',
    sidebar: sidebar,
    sidebarDepth: 1,
    docsDir: ".",
    repo: 'qloridant/qloridant.github.io',
    repoLabel: 'Dépôt Git',
    editLinks: true,
    editLinkText: 'Modifier cette page',
  }
}
