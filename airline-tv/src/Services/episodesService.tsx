import React from "react";

class EpisodeService {
    private readonly url = `https://api.tvmaze.com/schedule?country=US&date=2014-12-01`

    async getEpisodes(){
        const resp = await fetch(`${this.url}`)
        return resp.json()
    }
}

export const episodeService = new EpisodeService