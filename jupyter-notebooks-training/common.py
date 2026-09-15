import matplotlib.pyplot as plt
import cmath
import math
import functools

def foo(x): return x+1

def plotVectors(vectors, colors=[], kind='vectors'):
    top = max([x.imag for x in vectors])
    bottom = min([x.imag for x in vectors])
    left = min([x.real for x in vectors])
    right = max([x.real for x in vectors])
    
    plt.figure(figsize=(6,6))
    idx=0
    if kind == 'vectors':
        # Plot each complex number as an arrow starting at (0,0)
        for z in vectors:
            color = colors[idx] if(len(colors)>idx) else 'blue'
                
            plt.quiver(0, 0, z.real, z.imag, angles='xy', scale_units='xy', scale=1, 
                       color=color, alpha=0.8)
            # Add a text label near the arrowhead
            a = round(abs(z), 2)
            ph = round(math.degrees(cmath.phase(z)))
            plt.text(z.real * 1.1, z.imag * 1.1, f"{z}={a}e^{ph}deg", fontsize=11, weight='bold')
            plt.title('Complex Vector Representation')
    elif kind == 'path':
        xs = [x.real for x in vectors]
        ys = [x.imag for x in vectors]
        plt.plot(xs, ys)
        plt.title('Path between numbers')
    else:
        pass
    # Structure the graph coordinates
    plt.axhline(0, color='black', linewidth=1.2)
    plt.axvline(0, color='black', linewidth=1.2)
    plt.grid(True, which='both', linestyle=':', alpha=0.5)
    
    plt.xlabel('Real')
    plt.ylabel('Imaginary')
    
    
    plt.xlim(left-1, right+1)
    plt.ylim(bottom-1, top+1)
    
    plt.show()
    
    top, bottom, left, right