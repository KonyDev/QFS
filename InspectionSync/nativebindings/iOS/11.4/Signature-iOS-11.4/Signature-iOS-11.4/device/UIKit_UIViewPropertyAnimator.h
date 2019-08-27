#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIViewPropertyAnimator_symbols(JSContext*);
@protocol UIViewPropertyAnimatorInstanceExports<JSExport, UIViewImplicitlyAnimatingInstanceExports_, NSCopyingInstanceExports_>
@property (getter=isInterruptible,nonatomic) BOOL interruptible;
@property (nonatomic) BOOL scrubsLinearly;
@property (getter=isUserInteractionEnabled,nonatomic) BOOL userInteractionEnabled;
@property (readonly,nonatomic) NSTimeInterval delay;
@property (getter=isManualHitTestingEnabled,nonatomic) BOOL manualHitTestingEnabled;
@property (nonatomic) BOOL pausesOnCompletion;
@property (readonly,nonatomic) NSTimeInterval duration;
@property (readonly,copy,nonatomic) id timingParameters;
JSExportAs(initWithDurationControlPoint1ControlPoint2Animations,
-(id) jsinitWithDuration: (NSTimeInterval) duration controlPoint1: (CGPoint) point1 controlPoint2: (CGPoint) point2 animations: (JSValue *) animations );
JSExportAs(addAnimations,
-(void) jsaddAnimations: (JSValue *) animation );
JSExportAs(initWithDurationDampingRatioAnimations,
-(id) jsinitWithDuration: (NSTimeInterval) duration dampingRatio: (CGFloat) ratio animations: (JSValue *) animations );
JSExportAs(addAnimationsDelayFactor,
-(void) jsaddAnimations: (JSValue *) animation delayFactor: (CGFloat) delayFactor );
-(void) continueAnimationWithTimingParameters: (id) parameters durationFactor: (CGFloat) durationFactor ;
JSExportAs(initWithDurationCurveAnimations,
-(id) jsinitWithDuration: (NSTimeInterval) duration curve: (UIViewAnimationCurve) curve animations: (JSValue *) animations );
JSExportAs(addCompletion,
-(void) jsaddCompletion: (JSValue *) completion );
JSExportAs(initWithDurationTimingParameters,
-(id) jsinitWithDuration: (NSTimeInterval) duration timingParameters: (id) parameters );
@end
@protocol UIViewPropertyAnimatorClassExports<JSExport, UIViewImplicitlyAnimatingClassExports_, NSCopyingClassExports_>
JSExportAs(runningPropertyAnimatorWithDurationDelayOptionsAnimationsCompletion,
+(id) jsrunningPropertyAnimatorWithDuration: (NSTimeInterval) duration delay: (NSTimeInterval) delay options: (UIViewAnimationOptions) options animations: (JSValue *) animations completion: (JSValue *) completion );
@end
#pragma clang diagnostic pop