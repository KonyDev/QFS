#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIInteraction_symbols(JSContext*);
@protocol UIViewInteractionsCategoryInstanceExports<JSExport>
@property (copy,nonatomic) NSArray * interactions;
-(void) removeInteraction: (id) interaction ;
-(void) addInteraction: (id) interaction ;
@end
@protocol UIViewInteractionsCategoryClassExports<JSExport>
@end
@protocol UIInteractionInstanceExports_<JSExport, NSObjectInstanceExports_>
@property (readonly,nonatomic,weak) __kindof UIView * view;
-(void) didMoveToView: (UIView *) view ;
-(void) willMoveToView: (UIView *) view ;
@end
@protocol UIInteractionClassExports_<JSExport, NSObjectClassExports_>
@end
#pragma clang diagnostic pop