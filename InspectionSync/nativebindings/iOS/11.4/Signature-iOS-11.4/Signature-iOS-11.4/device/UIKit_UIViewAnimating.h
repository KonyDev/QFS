#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIViewAnimating_symbols(JSContext*);
@protocol UIViewAnimatingInstanceExports_<JSExport, NSObjectInstanceExports_>
@property (readonly,nonatomic) UIViewAnimatingState state;
@property (nonatomic) CGFloat fractionComplete;
@property (getter=isReversed,nonatomic) BOOL reversed;
@property (getter=isRunning,readonly,nonatomic) BOOL running;
-(void) stopAnimation: (BOOL) withoutFinishing ;
-(void) startAnimationAfterDelay: (NSTimeInterval) delay ;
-(void) finishAnimationAtPosition: (UIViewAnimatingPosition) finalPosition ;
-(void) pauseAnimation;
-(void) startAnimation;
@end
@protocol UIViewAnimatingClassExports_<JSExport, NSObjectClassExports_>
@end
@protocol UIViewImplicitlyAnimatingInstanceExports_<JSExport, UIViewAnimatingInstanceExports_>
JSExportAs(addCompletion,
-(void) jsaddCompletion: (JSValue *) completion );
JSExportAs(addAnimationsDelayFactor,
-(void) jsaddAnimations: (JSValue *) animation delayFactor: (CGFloat) delayFactor );
-(void) continueAnimationWithTimingParameters: (id) parameters durationFactor: (CGFloat) durationFactor ;
JSExportAs(addAnimations,
-(void) jsaddAnimations: (JSValue *) animation );
@end
@protocol UIViewImplicitlyAnimatingClassExports_<JSExport, UIViewAnimatingClassExports_>
@end
#pragma clang diagnostic pop