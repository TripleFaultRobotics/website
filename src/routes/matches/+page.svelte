<script lang="ts">
  import Recap from "$lib/components/Recap.svelte"
  const teams = {
    3848: "Shockwave",
    4216: "Rise of Hephaestus",
    5015: "Buffalo Wings",
    6226: "Bambusa",
    7609: "Lions",
    9049: "RoboPuffs",
    12499: "Gear Up",
    14338: "CAOS Robotics",
    14496: "Roboctopi",
    18263: "HIGH VOLTAGE",
    23251: "Triple Fault",
  }
  const t = (tn) => ({ name: teams[tn], tn })
  let lovelace2023_1 = [
    {
      name: "Qual 12",
      red: {
        score: 43,
        teams: [t(14338), t(18263)],
        bonuses: {
          auto: ["navigation"],
          endgame: ["navigation", "suspend"],
        },
        backstage: 2,
        backdrop: [
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 0, 0, 3, 2, 0, 0 ],
        ]
      },
      blue: {
        score: 110,
        teams: [t(23251), t(4216)],
        bonuses: {
          auto: ["navigation"],
          teleop: ["set-line-1"],
          endgame: ["drone-1", "navigation", "suspend"],
        },
        backstage: 2,
        backdrop: [
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 1, 1, 0, 0, 0, 0 ],
          [1, 3, 1, 3, 0, 0, 0 ],
           [ 2, 2, 3, 3, 0, 1 ],
        ]
      }
    },


    {
      name: "Qual 10",
      red: {
        score: 35,
        teams: [t(9049), t(7609)],
        bonuses: {
          auto: ["navigation"],
          endgame: ["navigation", "suspend"],
        },
        backstage: 5,
        backdrop: [
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 0, 0, 0, 0, 0, 0 ],
        ]
      },
      // 30 penalty !!
      blue: {
        score: 150,
        teams: [t(23251), t(14496)],
        bonuses: {
          auto: ["purple", "purple", "navigation"],
          endgame: ["drone-2", "navigation", "suspend"],
        },
        backstage: 0,
        backdrop: [
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 4, 0, 0, 1, 0, 2 ],
           [ 2, 3, 1, 3, 4, 2 ],
        ]
      }
    },


    {
      name: "Qual 9",
      red: {
        score: 119,
        teams: [t(23251), t(18263)],
        bonuses: {
          auto: ["purple", "yellow", "navigation"],
          teleop: ["set-line-1"],
          endgame: ["navigation", "suspend"],
        },
        backstage: 1,
        backdrop: [
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 0, 0, 0, 0, 1, 0 ],
          [0, 1, 2, 0, 2, 1, 0 ],
           [ 2, 2, 3, 3, 3, 1 ],
        ]
      },
      blue: {
        score: 79,
        teams: [t(12499), t(3848)],
        bonuses: {
          auto: ["navigation", "navigation"],
          endgame: ["drone-2","suspend", "suspend"],
        },
        backstage: 5,
        backdrop: [
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 2, 0, 0, 0, 0, 0 ],
        ]
      }
    },


    {
      name: "Qual 5",
      red: {
        score: 157,
        teams: [t(12499), t(23251)],
        bonuses: {
          auto: ["purple", "yellow", "navigation"],
          teleop: ["set-line-1"],
          endgame: ["drone-3", "drone-2", "suspend", "suspend"],
        },
        backstage: 0,
        backdrop: [
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 1, 0, 0, 0, 0, 0 ],
          [1, 3, 0, 0, 0, 0, 0 ],
           [ 2, 3, 1, 3, 3, 2 ],
        ]
      },
      blue: {
        score: 42,
        teams: [t(4216), t(6226)],
        bonuses: {
          auto: ["navigation"],
          endgame: ["navigation", "navigation"],
        },
        backstage: 9,
        backdrop: [
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 1, 1, 0, 0 ],
           [ 0, 1, 1, 1, 1, 0 ],
        ]
      }
    },


    {
      name: "Qual 3",
      // 30 penalty!!
      red: {
        score: 202,
        teams: [t(18263), t(14496)],
        bonuses: {
          auto: ["purple", "purple", "yellow", "navigation"],
          teleop: ["set-line-1", "mosaic"],
          endgame: ["drone-1", "navigation", "navigation"],
        },
        backstage: 0,
        backdrop: [
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 1, 0, 0, 0, 0 ],
           [ 1, 1, 1, 0, 0, 0 ],
          [1, 4, 1, 3, 0, 0, 0 ],
           [ 2, 3, 1, 3, 2, 2 ],
        ]
      },
      blue: {
        score: 90,
        teams: [t(5015), t(23251)],
        bonuses: {
          auto: ["purple", "yellow", "navigation"],
          endgame: ["suspend", "navigation"],
        },
        backstage: 3,
        backdrop: [
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 0, 0, 0, 0, 0, 0 ],
          [0, 0, 0, 0, 0, 0, 0 ],
           [ 1, 3, 0, 0, 1, 3 ],
        ]
      }
    }
  ]
</script>

<h1 class="mb-8 text-6xl font-extrabold text-center">Matches</h1>
<h1 class="text-6xl mb-8 font-medium text-center">Lovelace Meet #1</h1>
{#each lovelace2023_1 as match} 
  <div>
    <h1 class="text-4xl mb-2 text-center text-stone-400">{match.name}</h1>
    <Recap match={match} class="mb-16"/>
  </div>
{/each}
