#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_QuartzCore_CAScrollLayer_symbols(JSContext*);
@protocol CALayerCALayerScrollingCategoryInstanceExports<JSExport>
@property (readonly) CGRect visibleRect;
-(void) scrollPoint: (CGPoint) p ;
-(void) scrollRectToVisible: (CGRect) r ;
@end
@protocol CALayerCALayerScrollingCategoryClassExports<JSExport>
@end
@protocol CAScrollLayerInstanceExports<JSExport>
@property (copy) NSString * scrollMode;
-(void) scrollToRect: (CGRect) r ;
-(void) scrollToPoint: (CGPoint) p ;
@end
@protocol CAScrollLayerClassExports<JSExport>
@end
#pragma clang diagnostic pop