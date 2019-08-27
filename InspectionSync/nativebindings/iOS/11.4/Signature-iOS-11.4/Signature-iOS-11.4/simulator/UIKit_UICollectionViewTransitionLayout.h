#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UICollectionViewTransitionLayout_symbols(JSContext*);
@protocol UICollectionViewTransitionLayoutInstanceExports<JSExport>
@property (readonly,nonatomic) UICollectionViewLayout * currentLayout;
@property (readonly,nonatomic) UICollectionViewLayout * nextLayout;
@property (assign,nonatomic) CGFloat transitionProgress;
-(CGFloat) valueForAnimatedKey: (NSString *) key ;
-(void) updateValue: (CGFloat) value forAnimatedKey: (NSString *) key ;
JSExportAs(initWithCoder,
-(id) jsinitWithCoder: (NSCoder *) aDecoder );
JSExportAs(initWithCurrentLayoutNextLayout,
-(id) jsinitWithCurrentLayout: (UICollectionViewLayout *) currentLayout nextLayout: (UICollectionViewLayout *) newLayout );
@end
@protocol UICollectionViewTransitionLayoutClassExports<JSExport>
@end
#pragma clang diagnostic pop