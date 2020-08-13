import { Component, OnInit } from '@angular/core';
import { select, selectAll } from 'd3-selection';

@Component({
  selector: 'chart-5',
  templateUrl: 'chart-5.component.html',
  styleUrls: ['chart-5.component.scss']
})
export class Chart5Component implements OnInit{
    ngOnInit() {
        let _getC = this.getC;
        let svg = document.querySelector('.chart-5-svg') as HTMLElement;
        let des = document.querySelector('.chart-5-legend') as HTMLElement;
        let svgRect = svg.getBoundingClientRect();
        let desRect = des.getBoundingClientRect();
        let legSpan = document.querySelector('.chart-5-legend span') as HTMLElement;
        let ul      = document.querySelector('.chart-5-ul') as HTMLElement;
        svg.style.top  = `-${desRect.height}px`
        des.style.top  = `${svgRect.height / 2 - desRect.height / 2}px`;
        des.style.left = `${svgRect.width  / 2 - desRect.width  / 2}px`;
        ul.style.top   = `-${110}px`;

        window.addEventListener('resize', () => {
            svgRect = svg.getBoundingClientRect();
            desRect = des.getBoundingClientRect();
            svg.style.top  = `-${desRect.height}px`
            des.style.top  = `${svgRect.height / 2 - desRect.height / 2}px`;
            des.style.left = `${svgRect.width  / 2 - desRect.width  / 2}px`;
        });
        
        let params = {
            r: 70,
            w: 10,
            cols: [
                '#5A8DEE' // синий
              , '#00CFDD' // бирюзовый
              , '#FDAC41' // оранжевый
            ]
        };

        let dummyDate = [30, 40, 50];
        draw();

        setInterval(() => {
            draw();
            dummyDate[0] = Math.floor(Math.random() * 100);
            dummyDate[1] = Math.floor(Math.random() * 100);
            dummyDate[2] = Math.floor(Math.random() * 100);
        }, 1300);

        function draw(){
            let percDisp = [], // display percent
                s = 0; // shift - ымещение следующей области, чтобы не было наложения областей друг на друга
            if(!svg.children.length){
                select('.chart-5-svg')
                  .selectAll('.displayCircles')
                  .data([params, params, params])
                  .enter()
                  .append('circle')
                    .attr('class', 'displayCircles')
                    .attr('cx', '50%')
                    .attr('cy', '50%')
                    .attr('r', (d: any) => d.r)
                    .attr('fill', 'none')
                    .attr('stroke', (d: any, i: number) => d.cols[i])
                    .attr('stroke-width', (d: any) => d.w)
                    .attr('stroke-dasharray' , (d: any, i: number) => {
                        let tNum = 0; // total Num
                        dummyDate.forEach(item => tNum += item);
                        // макс число в <p>
                        legSpan.innerHTML = `${tNum}`;

                        let percN = dummyDate[i] / tNum * 100;
                        percDisp.push(_getC(d.r) * percN / 100);

                        return `${percDisp[i]} ${_getC(d.r) - percDisp[i]}`
                    })
                    .attr('stroke-dashoffset', (d: any, i: number) => {
                        s += percDisp[i];
                        return s + _getC(d.r) / 4;
                    })
                    .style('transition', '1s')
            } else {
                selectAll('.displayCircles')
                  .data([params, params, params])
                    .attr('stroke', (d: any, i: number) => {
                        return d.cols[i];
                    })
                    .attr('stroke-dasharray' , (d: any, i: number) => {
                        let tNum = 0;
                        dummyDate.forEach(item => tNum += item);
                        // макс число в <p>
                        legSpan.innerHTML = `${tNum}`;

                        let percN = dummyDate[i] / tNum * 100;
                        percDisp.push(_getC(d.r) * percN / 100);

                        return `${percDisp[i]} ${_getC(d.r) - percDisp[i]}`
                    })
                    .attr('stroke-dashoffset', (d: any, i: number) => {
                        s += percDisp[i];
                        return s + _getC(d.r) / 4;
                    })
            }
        }
    }

    getC(r: number) {
        return 2 * Math.PI * r;
    }
}