#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIPanGestureRecognizer_symbols(JSContext*);
@protocol UIPanGestureRecognizerInstanceExports<JSExport>
@property (nonatomic) NSUInteger maximumNumberOfTouches;
@property (nonatomic) NSUInteger minimumNumberOfTouches;
-(CGPoint) velocityInView: (UIView *) view ;
-(void) setTranslation: (CGPoint) translation inView: (UIView *) view ;
-(CGPoint) translationInView: (UIView *) view ;
@end
@protocol UIPanGestureRecognizerClassExports<JSExport>
@end
#pragma clang diagnostic pop