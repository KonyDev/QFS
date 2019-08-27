#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_QuartzCore_CAEmitterLayer_symbols(JSContext*);
@protocol CAEmitterLayerInstanceExports<JSExport>
@property () CGFloat emitterDepth;
@property () float scale;
@property (copy) NSString * emitterShape;
@property (copy) NSArray * emitterCells;
@property (copy) NSString * emitterMode;
@property () BOOL preservesDepth;
@property () CGSize emitterSize;
@property () float birthRate;
@property () unsigned int seed;
@property () CGFloat emitterZPosition;
@property () float velocity;
@property () float spin;
@property () float lifetime;
@property (copy) NSString * renderMode;
@property () CGPoint emitterPosition;
@end
@protocol CAEmitterLayerClassExports<JSExport>
@end
#pragma clang diagnostic pop