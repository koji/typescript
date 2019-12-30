import React from "react";
import * as VFX from "react-vfx";
import styled from "styled-components";

const Content = styled.div`
  width: 100vw;
  height: 100vh;
`;

const metal = `
uniform vec2 resolution;
uniform float time;
void main()
{
    vec2 coord = gl_FragCoord.xy / resolution.xy;
    vec2 st = coord;
    vec3 line = vec3(0.0);

    // coord *= 20.;
    coord *= 4.;

    float len;

    for (int i = 0; i < 15; i++) {
        len = length(vec2(coord.x, coord.y));
        coord.x += cos(coord.y + sin(len)) + cos(time * .07) * 0.2;
        coord.y += sin(coord.x + cos(len)) + sin(time * 0.1);
    }

    len *= cos(len * 0.4);

    len -= 10.;

    for (float i = 0.0; i < 5.0; i++) {
        len += 0.11 / abs(mod(st.x, 1.09 * i) * 200.) * 1.;
    }

    vec3 color = vec3(cos(len + 0.2) * 1.15, cos(len + 0.1), cos(len - 0.05));

    gl_FragColor = vec4(color, 1.0);
}
`;

const MyShader: React.FC = () => {
  return (
    <>
      <VFX.VFXProvider>
        <VFX.VFXSpan shader={metal}>
          <Content></Content>
        </VFX.VFXSpan>
      </VFX.VFXProvider>
    </>
  );
}

export default MyShader;
