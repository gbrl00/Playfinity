import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {

  igameId: string;

  titulo: string = 'STARFIELD';
  foto: string ='https://eu-images.contentstack.com/v3/assets/blt95b381df7c12c15d/blt0801a1d5f707ad98/642434759506e969f9224ef0/RE4_Header.png'

  description: string = 'Starfield é o primeiro universo novo em mais de 25 anos da Bethesda Game Studios, os premiados criadores de The Elder Scrolls V: Skyrim e Fallout 4. Neste RPG para a nova geração em meio às estrelas, crie o personagem que você quiser e explore com liberdade inigualável enquanto embarca em uma jornada épica para desvendar o maior mistério da humanidade.';
  description2: string = 'No ano de 2330, a humanidade já se aventurou para além do nosso sistema solar, colonizando planetas novos, e agora habita o espaço. Você passará a integrar a Constelação – o último grupo de exploradores espaciais em busca de artefatos raros pela galáxia – e navegará pela vastidão do espaço no maior e mais ambicioso jogo da Bethesda Game Studios.';
  
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {
      this.igameId = params.get('id') ?? '';
    });
  }

}
