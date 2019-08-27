#import <JavaScriptCore/JavaScriptCore.h>
#import "allheaders.h"
#import "allprotos.h"
#pragma clang diagnostic push
#pragma clang diagnostic ignored "-Wdeprecated-declarations"
#pragma clang diagnostic ignored "-Wobjc-property-no-attribute"
#pragma clang diagnostic ignored "-Wnullability-completeness"
void load_UIKit_UIButton_symbols(JSContext*);
@protocol UIButtonUIButtonDeprecatedCategoryInstanceExports<JSExport>
@property (nonatomic) CGSize titleShadowOffset;
@property (nonatomic,strong) UIFont * font;
@property (nonatomic) NSLineBreakMode lineBreakMode;
@end
@protocol UIButtonUIButtonDeprecatedCategoryClassExports<JSExport>
@end
@protocol UIButtonSpringLoadingCategoryInstanceExports<JSExport, UISpringLoadedInteractionSupportingInstanceExports_>
@end
@protocol UIButtonSpringLoadingCategoryClassExports<JSExport, UISpringLoadedInteractionSupportingClassExports_>
@end
@protocol UIButtonInstanceExports<JSExport, NSCodingInstanceExports_>
@property (readonly,nonatomic,strong) UIImage * currentBackgroundImage;
@property (nonatomic) UIEdgeInsets contentEdgeInsets;
@property (nonatomic) UIEdgeInsets imageEdgeInsets;
@property (nonatomic) BOOL adjustsImageWhenDisabled;
@property (readonly,nonatomic,strong) NSAttributedString * currentAttributedTitle;
@property (nonatomic,strong) UIColor * tintColor;
@property (readonly,nonatomic,strong) UIColor * currentTitleShadowColor;
@property (readonly,nonatomic,strong) UIImage * currentImage;
@property (readonly,nonatomic) UIButtonType buttonType;
@property (readonly,nonatomic,strong) NSString * currentTitle;
@property (nonatomic) UIEdgeInsets titleEdgeInsets;
@property (nonatomic) BOOL adjustsImageWhenHighlighted;
@property (nonatomic) BOOL reversesTitleShadowWhenHighlighted;
@property (nonatomic) BOOL showsTouchWhenHighlighted;
@property (readonly,nonatomic,strong) UIColor * currentTitleColor;
@property (readonly,nonatomic,strong) UIImageView * imageView;
@property (readonly,nonatomic,strong) UILabel * titleLabel;
-(CGRect) backgroundRectForBounds: (CGRect) bounds ;
-(CGRect) imageRectForContentRect: (CGRect) contentRect ;
-(void) setBackgroundImage: (UIImage *) image forState: (UIControlState) state ;
-(UIImage *) imageForState: (UIControlState) state ;
-(void) setImage: (UIImage *) image forState: (UIControlState) state ;
-(NSAttributedString *) attributedTitleForState: (UIControlState) state ;
-(void) setTitle: (NSString *) title forState: (UIControlState) state ;
-(CGRect) titleRectForContentRect: (CGRect) contentRect ;
-(NSString *) titleForState: (UIControlState) state ;
-(CGRect) contentRectForBounds: (CGRect) bounds ;
-(UIColor *) titleShadowColorForState: (UIControlState) state ;
-(void) setAttributedTitle: (NSAttributedString *) title forState: (UIControlState) state ;
-(void) setTitleShadowColor: (UIColor *) color forState: (UIControlState) state ;
-(UIColor *) titleColorForState: (UIControlState) state ;
-(UIImage *) backgroundImageForState: (UIControlState) state ;
-(void) setTitleColor: (UIColor *) color forState: (UIControlState) state ;
@end
@protocol UIButtonClassExports<JSExport, NSCodingClassExports_>
+(id) buttonWithType: (UIButtonType) buttonType ;
@end
#pragma clang diagnostic pop