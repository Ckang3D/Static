import { defineConfig, tierPresets } from 'sponsorkit'

export default defineConfig({

  // includePrivate: true,
  tiers: [
    {
      title: '💕 Past Sponsors',
      monthlyDollars: -1,
      preset: tierPresets.xs,
    },
    {
      title: '🍨 Ice cream',
      preset: tierPresets.base,
    },
    {
      title: '🍵 Tea',
      monthlyDollars: 5,
      preset: tierPresets.medium,
    },
    {
      title: '🍹 Tropical Drink',
      monthlyDollars: 12,
      preset: tierPresets.large,
    },
    {
      title: '🍱 Bento',
      monthlyDollars: 20,
      preset: tierPresets.xl,
    },
  ],

  // Replace links and avatars
  // replaceLinks: {
  //   'https://github.com/antfu': 'https://antfu.me',
  // },
  // replaceAvatars: {
  //   ...
  // },

  // Automatically Merge sponsors from different platforms
  sponsorsAutoMerge: true,

  // Manually merge sponsors from different platforms
  // mergeSponsors: [
  //   [
  //     { login: 'patak-dev', provider: 'github' },
  //     { login: 'patak', provider: 'opencollective' },
  //   ],
  // ],

  // Run multiple renders with different configurations
  renders: [
    {
      name: 'sponsors',
      width: 800,
      formats: ['svg', 'png'],
      includePastSponsors: false,
    },
    {
      name: 'sponsors-wide',
      width: 1300,
      formats: ['svg'],
    },
    {
      renderer: 'circles',
      name: 'sponsors-circles',
      width: 1300,
      includePastSponsors: false,
    },
  ],
})
