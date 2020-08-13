import { Component, OnInit } from '@angular/core';
import { select, selectAll } from 'd3-selection';

@Component({
  selector: 'chart-1',
  templateUrl: 'chart-1.component.html',
  styleUrls: ['chart-1.component.scss']
})
export class Chart1Component implements OnInit{
    ngOnInit() {
        let _getC = this.getC;
        let svg = document.querySelector('.chart-1-svg') as HTMLElement;
        let des = document.querySelector('.chart-1-legend') as HTMLElement;
        let ul  = document.querySelector('.chart-1-ul') as HTMLElement;
        let svgRect = svg.getBoundingClientRect();
        let desRect = des.getBoundingClientRect();
        let x = svgRect.width  / 2
          , y = svgRect.height / 2;
        des.style.left = `${x - desRect.width / 2}px`;
        des.style.top  = `-${y + desRect.height / 2}px`;
        ul.style.top  = `-${125}px`;

        window.addEventListener('resize', () => {
            svgRect = svg.getBoundingClientRect();
            desRect = des.getBoundingClientRect();
            x = svgRect.width  / 2
          , y = svgRect.height / 2;
            des.style.left = `${x - desRect.width / 2}px`;
            des.style.top  = `-${y + desRect.height / 2}px`;
            ul.style.top  = `-${125}px`;
        });

        let bgCircles = [{
            r: 100, // радиус
        },{
            r: 80
        },{
            r: 60
        }];    
        let displayCircles = [{
            r: 100,
            b: '#39DA8A',
            w: 10,
            rEnd: 5, // радиус конечных точек (скругление)
        },{
            r: 80,
            b: '#00CFDD',
            w: 10,
            rEnd: 5,
        },{
            r: 60,
            b: '#C27AEB',
            w: 10,
            rEnd: 5,
        }];
        
        // dummy data
        let data = new Map([
        ['#39DA8A', 25],
        ['#00CFDD', 30],
        ['#C27AEB', 20]
        ])
        setInterval(() => { draw() }, 1300)

        function draw() {
            if(!svg.children.length){
                select('.chart-1-svg')
                .selectAll('.bgCircles')
                .data(bgCircles)
                .enter()
                .append('circle')
                    .attr('class', 'bgCircles')
                    .attr('cx', '50%')
                    .attr('cy', '50%')
                    .attr('r', (d: any) => d.r)
                    .attr('stroke', 'lightgrey')
                    .attr('stroke-width', 10)
                    .attr('fill', 'none');

                select('.chart-1-svg')
                .selectAll('.display')
                .data(displayCircles)
                .enter()
                .append('circle')
                    .attr('class', 'display')
                    .attr('cx', '50%')
                    .attr('cy', '50%')
                    .attr('r', (d: any) => d.r)
                    .attr('stroke', (d: any) => d.b)
                    .attr('stroke-width', (d: any) => d.w)
                    .attr('fill', 'none')
                    .attr('stroke-dasharray' , (d: any) => {
                    // let disp = Math.floor(Math.random() * getC(d.r));
                    let disp = _getC(d.r) / 100 * data.get(d.b);
                    let alpha = (disp * 360) / (2 * Math.PI * d.r);

                    select('.chart-1-svg')
                        .append('circle')
                        .attr('class', 'bRadEnd')
                        .attr('cx', x)
                        .attr('cy', y - d.r)
                        .attr('r', d.rEnd)
                        .attr('fill', d.b)
                        .style('transform-origin', `${x}px ${y}px`)
                        .style('transform', `rotate(${alpha}deg)`)
                        .style('transition', '1s');

                    return `${disp} ${_getC(d.r) - disp}`
                    })
                    .attr('stroke-dashoffset', (d: any) => _getC(d.r) / 4)
                    .style('transition', '1s')
                
                // скругление углов - начальные точки
                select('.chart-1-svg')
                .selectAll('.bRad')
                .data(displayCircles)
                .enter()
                .append('circle')
                    .attr('class', 'bRad')
                    .attr('cx', x)
                    .attr('cy', (d: any) => y - d.r)
                    .attr('r', (d: any) => d.rEnd)
                    .attr('fill', (d: any) => d.b)
            } else {
                let angles = [];
                selectAll('.display')
                .data(displayCircles)
                    .attr('stroke-dasharray' , (d: any) => {
                        let disp = Math.floor(Math.random() * _getC(d.r));
                        // let disp = getC(d.r) / 100 * data.get(d.b);
                        let alpha = (disp * 360) / (2 * Math.PI * d.r);
                        angles.push(alpha);
                        return `${disp} ${_getC(d.r) - disp}`
                    });
                
                selectAll('.bRad')
                .data(displayCircles)
                .attr('cx', x)
                .attr('cy', (d: any) => y - d.r)

                selectAll('.bRadEnd')
                .data(displayCircles)
                .attr('cx', x)
                .attr('cy', (d: any) => y - d.r)
                .style('transform-origin', `${x}px ${y}px`)
                .style('transform', (d: any, i:number) => `rotate(${angles[i]}deg)`);
            }
        }
    }

    getC(r: number) {
        return 2 * Math.PI * r;
    }
}