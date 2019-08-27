#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UITimingParameters_symbols(JSContext*);
@protocol UISpringTimingParametersInstanceExports<JSExport, UITimingCurveProviderInstanceExports_>
@property (readonly,nonatomic) CGVector initialVelocity;
JSExportAs(initWithDampingRatio,
-(id) jsinitWithDampingRatio: (CGFloat) ratio );
JSExportAs(initWithCoder,
-(id) jsinitWithCoder: (NSCoder *) aDecoder );
JSExportAs(initWithDampingRatioInitialVelocity,
-(id) jsinitWithDampingRatio: (CGFloat) ratio initialVelocity: (CGVector) velocity );
-(id) jsinit;
JSExportAs(initWithMassStiffnessDampingInitialVelocity,
-(id) jsinitWithMass: (CGFloat) mass stiffness: (CGFloat) stiffness damping: (CGFloat) damping initialVelocity: (CGVector) velocity );
@end
@protocol UISpringTimingParametersClassExports<JSExport, UITimingCurveProviderClassExports_>
@end
@protocol UICubicTimingParametersInstanceExports<JSExport, UITimingCurveProviderInstanceExports_>
@property (readonly,nonatomic) UIViewAnimationCurve animationCurve;
@property (readonly,nonatomic) CGPoint controlPoint2;
@property (readonly,nonatomic) CGPoint controlPoint1;
JSExportAs(initWithControlPoint1ControlPoint2,
-(id) jsinitWithControlPoint1: (CGPoint) point1 controlPoint2: (CGPoint) point2 );
JSExportAs(initWithCoder,
-(id) jsinitWithCoder: (NSCoder *) aDecoder );
JSExportAs(initWithAnimationCurve,
-(id) jsinitWithAnimationCurve: (UIViewAnimationCurve) curve );
-(id) jsinit;
@end
@protocol UICubicTimingParametersClassExports<JSExport, UITimingCurveProviderClassExports_>
@end
#pragma clang diagnostic pop