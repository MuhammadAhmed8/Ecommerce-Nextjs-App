import React, {useState, useEffect} from 'react';
import {Container, Grid, Paper, Card, Box, CardContent} from '@material-ui/core';
import IngredientsCard from '../components/Ingredients/IngredientsCard';


export default function Ingredients() {
    return (
      <div className='ingBody'> 
        <Box className='anti_aging' maxwidth="sm">
          <h1 className='anti_aging__header'>Your Botanical Anti-Aging Skincare</h1>
          <p className='anti_aging__text'>
            Our Plant-based skin treatments contain powerful botanical extracts that have been combined with anti-aging ingredients such as Stem Cells, EGF (Epidermal Growth Factor), more than 100 Polypeptides and tackle everything from age spots and wrinkles to boosting collagen and firming skin.
          </p>
        </Box>

        <Box className='plant-based__text' maxwidth="md">
          <h1 >Plant-Based Formulas<br></br> for Naturally Born Leaders</h1>
          <p>
            We develop vegan-friendly treatments composed of 90% natural ingredients.
          <br></br>
            Each and every product are made with nourishing fruit extracts and plant-based formulas.
          </p>
        </Box>

        <Grid container spacing={3}>

          <Grid item xs={12} md={6}>

            <IngredientsCard 
              heading='Super Hydrators' 
              description='Plant extracts that calm, protect and moisture-perfect'
              image='img/plant-based-1.png' 
            > 
                <ul class="card__detail-list">
                    <li>ALOE</li>
                    <li>ARNICA</li>
                    <li>AVOCADO</li>
                    <li>BURDOCK</li>
                    <li>LEAF OF LIFE</li>
                    <li>KATAFRAY</li>
                    <li>SACRED LOTUS</li>
                    <li>MACADAMIA</li>
                    <li>FIELD MINT</li>
                </ul>
                <ul class="card__detail-list">
                    <li>HAZELNUT</li>
                    <li>OLIVE TREE</li>
                    <li>BLUE ORCHID</li>
                    <li>PERILLA</li>
                    <li>QUINOA</li>
                    <li>SANDALWOOD</li>
                    <li>ROMAN CHAMOMILE</li>
                    <li>RASPBERRY</li>
                    <li>MIMOSA TENUIFLORA</li>
                </ul>
                <ul class="card__detail-list">
                    <li>JOJOBA</li>
                    <li>SHEA</li>
                    <li>MANGO</li>
                    <li>BITTER ORANGE</li>
                    <li>SALICORNIA</li>
                    <li>TAMANU</li>
                    <li>GREEN COFFEE BEAN</li>
                    <li>SUNFLOWER</li>
                    <li>INCA PEANUT</li>
                </ul>

            </IngredientsCard>
          </Grid>

          <Grid item xs={12} md={6}>

            <IngredientsCard 
              heading='Age Defiers' 
              description='Botanical extracts that visibly firm, tone and fight wrinkles'
              image='img/plant-based-2.png' 
            > 
                <ul class="card__detail-list">
                    <li>BANANA</li>
                    <li>BOCOA</li>
                    <li>
                        WILD TEASEL</li>
                    <li>CENTELLA ASIATICA</li>
                    <li>TURMERIC</li>
                    <li>
                        HARUNGANA</li>
                    <li>HOPS</li>
                    <li>SOURWOOD</li>
                    <li>MARITIME PINE</li>
                </ul>
                <ul class="card__detail-list">
                    <li>WHITE TEA</li>
                    <li>LEMON THYME</li>
                    <li>
                        SEA LETTUCE</li>
                    <li>SUCCORY DOCK CRESS</li>
                    <li>CANTALOUPE MELON</li>
                    <li>
                        KUDZU</li>
                    <li>PERSIMMON</li>
                    <li>NARROW-LEAF PLANTAIN</li>
                    <li>GUARANA</li>
                </ul>
                <ul class="card__detail-list">
                    <li>ZERUMBET GINGER</li>

                </ul>


            </IngredientsCard>
          </Grid>

          <Grid item xs={12} md={6}>

            <IngredientsCard 
              heading='Body Improvers' 
              description='Nature’s secrets for a visibly firm, toned, steamlined silhouette'
              image='img/plant-based-3.png' 
            > 
                <ul class="card__detail-list center ">
                    <li>OATS </li>
                    <li>CANG ZHU </li>
                    <li>
                        QUINCE</li>
                    <li>WATER MINT</li>
                    <li>CELOSIA</li>
                    <li>
                        POPPY</li>
                    <li>BLUE BUTTON FLOWER</li>

                </ul>

            </IngredientsCard>
          </Grid>

          <Grid item xs={12} md={6}>

            <IngredientsCard 
              heading='Complexion Perfectors' 
              description='Plants that promote even, radiant, youthful-looking skin'
              image='img/plant-based-4.png' 
            > 
                <ul class="card__detail-list ">
                    <li>ACEROLA</li>
                    <li>ALBIZIA BAMBOO</li>
                    <li>
                        GINSENG</li>
                    <li>MARSHMALLOW</li>
                    <li>KIWI</li>
                    <li>
                        MORINGA</li>
                    <li>BAOBAB</li>
                    <li>
                        CORNFLOWER</li>
                    <li>GINKGO BILOBA</li>
                </ul>
                <ul class="card__detail-list ">
                    <li>IRIS</li>
                    <li>PARSLEY</li>
                    <li>
                        RICE</li>
                    <li>ROSE</li>
                    <li>
                        ROWAN</li>

                </ul>

            </IngredientsCard>
          </Grid>

        </Grid>

      </div>  
    )
  }