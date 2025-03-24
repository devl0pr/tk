import { error } from '@sveltejs/kit';

export function load({ params }) {
    const games = {
        "feign": { title: "Feign", description: "Beautiful nature view", image: "/img/feign_header.jpeg", video: "/videos/feign.mp4" },
        "feather-party": { title: "Feather Party", description: "Urban cityscape", image: "/img/feather_header.jpeg", video: "/videos/feather.mp4" },
        "throwia": { title: "Throwia", description: "Majestic mountains", image: "/img/throwia_header.jpeg", video: "/videos/throwia.mp4" },
        "trakonius": { title: "Trakonius", description: "Deep blue ocean", image: "/img/tra_header.jpeg", video: "/videos/trakonius.mp4" },
        "hoop-fighters": { title: "Hoop Fighters", description: "Deep blue ocean", image: "/img/hoop_header.jpeg", video: "/videos/hoop.mp4" },
        "ocean-gap": { title: "Ocean Gap", description: "Deep blue ocean", image: "/img/ocean_header.jpeg", video: "/videos/ocean.mp4" },
        "surviwall": { title: "Surviwall", description: "Deep blue ocean", image: "/img/surviwall_header.jpeg", video: "/videos/surviwall.mp4" },
    };

    const game = games[params.slug];

    if (game) {
        return {
            game
        };
    }

    error(404, 'Not found');
}
