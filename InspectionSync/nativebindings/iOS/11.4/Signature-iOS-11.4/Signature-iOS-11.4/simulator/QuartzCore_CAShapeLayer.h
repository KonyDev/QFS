#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_QuartzCore_CAShapeLayer_symbols(JSContext*);
@protocol CAShapeLayerInstanceExports<JSExport>
@property () CGFloat strokeEnd;
@property () CGFloat lineWidth;
@property (copy) NSString * fillRule;
@property (copy) NSString * lineCap;
@property () CGFloat miterLimit;
@property (copy) NSArray * lineDashPattern;
@property () id fillColor;
@property () CGFloat lineDashPhase;
@property () id path;
@property () id strokeColor;
@property () CGFloat strokeStart;
@property (copy) NSString * lineJoin;
@end
@protocol CAShapeLayerClassExports<JSExport>
@end
#pragma clang diagnostic pop