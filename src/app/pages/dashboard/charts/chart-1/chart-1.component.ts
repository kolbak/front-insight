import { Component, OnInit } from '@angular/core';
import { select, selectAll } from 'd3-selection';
import * as shape from 'd3-shape';

@Component({
  selector: 'chart-1',
  templateUrl: 'chart-1.component.html',
  styleUrls: ['chart-1.component.scss']
})
export class Chart1Component implements OnInit{
    ngOnInit() {
        let _degToRad = this.degToRad;

        let svg = document.querySelector('.chart-1-svg') as HTMLElement;
        let leg = document.querySelector('.chart-1-legend') as HTMLElement;
        let ul  = document.querySelector('.chart-1-ul') as HTMLElement;
        let svgRect = svg.getBoundingClientRect();
        let legRect = leg.getBoundingClientRect();
        let x = svg.clientWidth  / 2
          , y = svg.clientHeight / 2;
        
        leg.style.left = `${x - legRect.width / 2}px`;
        leg.style.top  = `-${y + legRect.height / 2}px`;
        ul.style.top  = `-${125}px`;

        select(svg).append('g')
            .attr('class', 'chart-1-svg-g')
            .style('transform', `translate(${x}px, ${y}px)`);
        let group = document.querySelector('.chart-1-svg-g') as HTMLElement;

        window.addEventListener('resize', () => {
            svgRect = svg.getBoundingClientRect();
            legRect = leg.getBoundingClientRect();
            x = svgRect.width  / 2
          , y = svgRect.height / 2;
            leg.style.left = `${x - legRect.width / 2}px`;
            leg.style.top  = `-${y + legRect.height / 2}px`;
            group.style.transform = `translate(${x}px, ${y}px)`;
        });
        
        // dummy data
        let data = [25, 25, 50];
        
        let params = {
            r: [100, 80, 60],
            cols: ['#39DA8A', '#00CFDD', '#C27AEB'],
            totalNum: 0,
            partBg: 0
        }
        data.forEach(item => params.totalNum += item);
        
        
        let pieDisp: any, pieBg: any;
        let arc = shape.arc()
                    .padAngle(.04)
                    .cornerRadius(15);
        draw();
        
        function draw() {
            for(let i = 0, l = data.length; i < l; i++){
                if(group.children.length < l * 2) {
                    params.partBg = params.totalNum - data[i];
                    pieBg = shape.pie()
                        .sort(null)        
                        .value((d: number) => d)
                        .startAngle(_degToRad(0))
                        .endAngle(_degToRad(360))([params.partBg + data[i]]);
            
                    pieDisp = shape.pie()
                        .sort(null)        
                        .value((d: number) => d)
                        .startAngle(_degToRad(0))
                        .endAngle(_degToRad(360))([data[i], params.partBg]);

                    arc.innerRadius(params.r[i] - 11)
                        .outerRadius(params.r[i] + 1)
            
                    select(`.chart-1-svg-g`)
                    .data(pieBg)
                    .append('path')
                        .attr('class', () => `chart-1-bg-${i}`)
                        .attr('d', arc)
                        .attr('stroke', '#EDEFF1')
                        .attr('stroke-width', 2)
                        .attr('fill', '#F2F4F4');
            
                    arc.innerRadius(params.r[i] - 10)
                        .outerRadius(params.r[i]);
            
                    select(`.chart-1-svg-g`)
                    .data(pieDisp)
                    .append('path')
                        .attr('class', () => `chart-1-disp-${i}`)
                        .attr('d', arc)
                        .attr('stroke', 'none')
                        .attr('stroke-width', 2)
                        .attr('fill', () => `${params.cols[i]}`)
                } else {
                    params.partBg = params.totalNum - data[i];
        
                    pieDisp = shape.pie()
                        .sort(null)        
                        .value((d: number) => d)
                        .startAngle(_degToRad(0))
                        .endAngle(_degToRad(360))([data[i], params.partBg]);
            
                    arc.innerRadius(params.r[i] - 10)
                        .outerRadius(params.r[i]);
            
                    select(`.chart-1-disp-${i}`)
                        .data(pieDisp)
                        .attr('d', arc)
                }
            }
        }
    }

    degToRad(deg: number){
        return deg * Math.PI / 180;
    }

    getC(r: number) {
        return 2 * Math.PI * r;
    }
}